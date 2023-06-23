import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Avatar from "../assets/images/avatar.png";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Публікації</Text>
      <View style={styles.infocontainer}>
        <Image source={Avatar} style={styles.avatar}></Image>
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.emale}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 375,
    textAlign: "center",
  },

  title: {
    marginTop: 44,
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },

  infocontainer: {
    marginLeft: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    marginRight: 8,
  },

  name: {
    fontFamily: "Roboto",
    fontSize: 13,
  },

  emale: {
    fontFamily: "Roboto",
    fontSize: 11,
  }
});
