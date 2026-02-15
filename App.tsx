import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from "./src/screens/SplashScreen"
import SignIn from "./src/screens/SignIn"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SplashScreen /> */}
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
