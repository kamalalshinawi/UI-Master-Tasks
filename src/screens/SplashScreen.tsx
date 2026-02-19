import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import SplashIcon from "../assets/icons";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("User");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <SplashIcon />
      <Text style={styles.content}> Stylish</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    color: "#F83758",
    fontSize: s(40),
  },
});
