import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { ReactNode, FC } from "react";

interface Icons {
  icon: ReactNode;
}

const SocialIcon: FC<Icons> = ({ icon }) => {
  return <TouchableOpacity style={styles.container}>{icon}</TouchableOpacity>;
};

export default SocialIcon;

const styles = StyleSheet.create({
  container: {
    height: vs(54),
    width: s(54),
    borderRadius: s(100),
    backgroundColor: "#FCF3F6",
    borderWidth: s(1),
    borderColor: "#F83758",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: vs(20),
  },
});
