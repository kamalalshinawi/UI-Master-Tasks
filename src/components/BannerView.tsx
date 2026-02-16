import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { FC } from "react";

interface Banner {
  textBanner: string;
}

const BannerView: FC<Banner> = ({ textBanner }) => {
  return (
    <View style={styles.StyleBanner}>
      <View style={styles.conBanner}>
        <Text style={styles.txtOne}>{textBanner}</Text>
      </View>
      <TouchableOpacity style={styles.ButtonBanner}>
        <Text style={styles.contTwo}>Get Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BannerView;

const styles = StyleSheet.create({
  StyleBanner: {
    height: vs(120),
    width: s(250),
    backgroundColor: "#F17547",
    borderRadius: s(15),
    paddingHorizontal: s(19),
  },
  conBanner: {
    marginTop: s(20),
  },
  txtOne: {
    color: "#ffffff",
    fontSize: s(16),
    fontWeight: "bold",
  },
  ButtonBanner: {
    height: vs(30),
    width: s(80),
    backgroundColor: "#fff",
    borderRadius: s(15),
    marginTop: vs(15),
    alignItems: "center",
    justifyContent: "center",
  },
  contTwo: {
    fontSize: s(12),
    fontWeight: "bold",
  },
});
