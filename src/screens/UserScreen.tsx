import { StyleSheet, Text, View } from 'react-native'
import {s,vs} from "react-native-size-matters"
import Header from "../components/Header"
import React from 'react'

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: s(26),
        paddingVertical:vs(30),
    },
    header:{

    },
    
})