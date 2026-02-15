import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { PassIcon, Eyeicon } from "../assets/icons";
import React from "react";

const PassWord = () => {
  return (
    <View style={styles.passcontainer}>
      <TextInput placeholder="Password" style={styles.passinput} />
      <PassIcon style={styles.passicon} />
      <Eyeicon style={styles.eyeicon} />
      <View style={styles.textpass}>
        <TouchableOpacity>
          <Text style={styles.forgettext}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassWord;

const styles = StyleSheet.create({
  passcontainer: {
    paddingBottom: vs(31),
  },

  passinput: {
    backgroundColor: "#F3F3F3",
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: "#A8A8A9",
    paddingHorizontal: s(35),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: vs(50),
    width: s(300),
  },
  passicon: {
    position: "absolute",
    left: s(10),
    top: vs(16),
  },
  eyeicon: {
    position: "absolute",
    right: s(2),
    top: vs(17),
  },
  textpass: {
    flexDirection: "row-reverse",
    paddingTop: vs(7),
  },
  forgettext: {
    color: "#F83758",
    fontSize: s(12),
    fontWeight: "regular",
  },
});
