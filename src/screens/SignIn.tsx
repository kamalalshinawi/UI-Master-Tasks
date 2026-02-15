import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Login from "../components/Login"
import React from "react";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.textcontent}>Welcome{"\n"}Back!</Text>
      </View>
      
        <Login />
      
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(32),
    backgroundColor: "#fff",
    paddingTop: vs(19),
  },
  headerText: {
    marginBottom: vs(36),
  },
  textcontent: {
    fontSize: s(36),
    fontWeight: "bold",
  },
});
