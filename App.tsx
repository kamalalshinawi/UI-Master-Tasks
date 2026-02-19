import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/SplashScreen";
import SignIn from "./src/screens/SignIn";
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import MainStackNavigation from "./src/navigation/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
