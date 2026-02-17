import { StyleSheet, Text, View,Image } from 'react-native'
import {s,vs} from "react-native-size-matters"
import React, {FC} from 'react'

interface TypeImage{
    image:string,
}

const BannerCard: FC<TypeImage> = ({image}) => {
  return (
    <View style={styles.bannercard}>

        <Image
        source={{uri:image}}
        />
      <Text style={{marginTop:vs(100)}}>BannerCard</Text>
      <View style={styles.Prices}></View>
      
      
    </View>
  )
}

export default BannerCard

const styles = StyleSheet.create({
    bannercard:{
        height: vs(150),
        width:s(150),
        backgroundColor:"#F8F8F8",
        borderRadius:s(15),
    },
})