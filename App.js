import { useFonts } from "expo-font";
import { Text, StyleSheet, } from "react-native";
// import RegistrationScreen from "./src/Components/RegistrationScreen";
import { Fragment } from "react";
// import LoginScreen from "./src/Components/LoginScreen";
// import PostsScreen from "./src/Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <Fragment>
      <Text style={styles.text}>Нічого не виходить</Text>
      {/* <RegistrationScreen /> */}
      {/* // <LoginScreen /> */}
      {/* // <PostsScreen /> */}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 100,
  }
})
