import React from "react";
import { Text, View } from "react-native";
import Avatar from "../assets/images/avatar.png";

export default function PostsScreen() {
  return (
    <View>
      <Text>Публікації</Text>
      <Image source={Avatar} style={{ width: 60, height: 60 }}></Image>
      <View>
        <Text>Natali Romanova</Text>
        <Text>email@example.com</Text>
      </View>
    </View>
  );
}
