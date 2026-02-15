import { StyleSheet, Text, View, TextInput } from "react-native";
import { s, vs } from "react-native-size-matters";
import { UserIcon, PassIcon, Eyeicon } from "../assets/icons";
import UsernameInput from "../components/UsernameInput";
import PassWord from "../components/PassWord";

import React from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <UsernameInput />

      <PassWord />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingBottom: vs(20),
  },
});
