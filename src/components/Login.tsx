import { StyleSheet, Text, View , TextInput } from 'react-native'
import {s,vs} from"react-native-size-matters"
import {UserIcon} from "../assets/icons"
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Username or Email' style={styles.usernameinput}/>
        <UserIcon style={styles.userIcon} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        paddingBottom:vs(31),
    },
    usernameinput:{
        backgroundColor:"#F3F3F3",
        borderRadius:s(10),
        borderWidth: s(1),
        borderColor: "#A8A8A9",
        paddingHorizontal: s(30),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:vs(50),
        width:s(300),


    },
    userIcon:{
        position:"absolute",
        left: s(5),
        top:vs(13),

        
    }
})