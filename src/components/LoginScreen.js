import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import ImageBG from "../assets/images/imageBG.png";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={ImageBG} imageStyle={styles.backgroundImg}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.form}>

            <Text style={styles.title}>Увійти</Text>

            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            ></TextInput>

            <View>
              <TextInput style={styles.input} placeholder="Пароль"></TextInput>

              {/* <Pressable>
                <Text>Показати</Text>
            </Pressable> */}
            </View>
          </KeyboardAvoidingView>

          <Pressable style={styles.button}>
            <Text style={styles.buttonName}>Увійти</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.linkName}>Немає акаунту? Зареєструватися</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },

  container: {
    width: "100%",
    marginTop: 260,
    flex: 1,
    color: "#212121",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
  },

  title: {
    marginTop: 92,
    marginBottom: 12,
    fontFamily: "Roboto-500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },

  input: {
    marginBottom: 16,
    height: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    color: "#BDBDBD",
  },

  button: {
    marginTop: 33,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    height: 51,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  buttonName: {
    textAlign: "center",
    color: "#ffffff",
  },

  linkName: {
    textAlign: "center",
    color: "#1B4371",
  },

  iconAddAvatar: {
    position: "absolute",
    right: -(25 / 2),
    bottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    color: "#FF6C00",
  },
});
