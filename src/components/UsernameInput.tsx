import { StyleSheet, Text, View, TextInput } from "react-native";
import { s, vs } from "react-native-size-matters";
import { UserIcon } from "../assets/icons";

import React from "react";

const UsernameInput = () => {
  return (
    <View style={styles.usernamecontainer}>
      <TextInput placeholder="Username or Email" style={styles.usernameinput} />
      <UserIcon style={styles.userIcon} />
    </View>
  );
};

export default UsernameInput;

const styles = StyleSheet.create({
  usernameinput: {
    backgroundColor: "#F3F3F3",
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: "#A8A8A9",
    paddingHorizontal: s(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: vs(50),
    width: s(300),
  },
  usernamecontainer: {
    paddingBottom: vs(31),
  },
  userIcon: {
    position: "absolute",
    left: s(5),
    top: vs(13),
  },
});
