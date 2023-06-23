import { useFonts } from "expo-font";
// import { StyleSheet } from "react-native";
import { Fragment } from "react";
// import LoginScreen from "./src/Сomponents/LoginScreen";
import RegistrationScreen from "./src/Сomponents/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require("./src/assets/fonts/Roboto-Regular.ttf"),
    'Roboto-500': require("./src/assets/fonts/Roboto-Medium.ttf"),
    'Roboto-700': require("./src/assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <Fragment>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </Fragment>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     textAlign: "center",
//     marginTop: 100,
//   },
// });
