import { useFonts } from "expo-font";
import { Fragment } from "react";
// import LoginScreen from "./src/Сomponents/LoginScreen";
import RegistrationScreen from "./src/Сomponents/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
      'Roboto': require("./src/assets/fonts/Roboto-Regular.ttf"),
  });
  return (
    <Fragment>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </Fragment>
  );
}

