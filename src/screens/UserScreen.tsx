import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Header from "../components/Header";
import { HandIcon } from "../assets/icons";
import BannerView from "../components/BannerView"
import React from "react";

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.screencontent}>
        <Text style={styles.textOne}>Hello Fola {<HandIcon />}</Text>
        <Text style={styles.textTwo}>Let’s start shopping!</Text>
      </View>
      <View style={styles.bannerView}>
        <BannerView  textBanner="20% OFF DURING THE WEEKEND" />
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(26),
    paddingVertical: vs(30),
  },
  header: {},
  screencontent: {},
  textOne: {
    color: "#000000",
    fontSize: s(20),
    fontWeight: "semibold",
  },
  textTwo: {
    color: "#000000",
    fontSize: s(12),
    fontWeight: "semibold",
  },
  bannerView:{
    marginTop:s(20),
  }
});
