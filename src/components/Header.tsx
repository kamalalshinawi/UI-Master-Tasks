import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {s,vs} from "react-native-size-matters"
import {MenuImage,SearchIcon} from "../assets/icons"
import React from "react";

const MenuIcon = () => {
  return ( <View style={styles.header}>
    <TouchableOpacity style={styles.Menu}>
      <MenuImage />
    </TouchableOpacity>
    <TouchableOpacity style={styles.Menu}>
      <SearchIcon />
    </TouchableOpacity>
  </View>
)};

export default MenuIcon;

const styles = StyleSheet.create({  
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:"red"
  },
  Menu:{
    height: vs(40),
    width: s(40),
    backgroundColor: "#D9D9D9",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:s(20),
  }
});
