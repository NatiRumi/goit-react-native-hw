import { useFonts } from "expo-font";
// import RegistrationScreen from './src/Components/RegistrationScreen';
// import LoginScreen from "./src/Components/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    // < RegistrationScreen />
    // <LoginScreen />
    <PostsScreen />
  );
}

