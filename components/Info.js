import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Img from "./test.png";
import * as Device from "expo-device";
import MyButton from "./MyButton";

export default class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Infos </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
