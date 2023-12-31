import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import ImageBG from "../assets/images/imageBG.png";
import Avatar from "../assets/images/avatar.png";
import { AntDesign } from "@expo/vector-icons";
import IconeAdd from '../assets/images/iconeAdd.png';

export default function RegistrationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={ImageBG} imageStyle={styles.backgroundImg}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.form}>
            <View style={styles.avatarBlock}>
                <View style={styles.avatar}></View>
              {/* <Image source={Avatar} style={{ width: 120, height: 120 }}></Image> */}
              <Pressable style={styles.avatarButton}>
                <Image source={IconeAdd} style={styles.icon} />
              </Pressable>
              {/* <Pressable>
                <AntDesign
                  name="pluscicleo"
                  size={25}
                  style={{ ...styles.iconAddAvatar }}
                ></AntDesign>
              </Pressable> */}
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <TextInput style={styles.input} placeholder="Логін"></TextInput>

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
            <Text style={styles.buttonName}>Зареєструватися</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.linkName}>Вже є акаунт? Увійти</Text>
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
    fontFamily: "Roboto",
  },

  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
  },

  avatarBlock: {
    width: 132,
    height: 120,
    position: "absolute",
    top: "-32%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: 50 }],
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  avatarButton: {
    borderColor: "#FF6C00",
    borderRadius: 50,
  },

  icon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: 0,
  },

  title: {
    marginTop: 92,
    marginBottom: 12,
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
    fontFamily: "Roboto",
    color: "#ffffff",
  },

  linkName: {
    textAlign: "center",
    fontFamily: "Roboto",
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
