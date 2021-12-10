import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Img from "./test.png";
import { Picker } from "@react-native-picker/picker";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Home </Text>
        <Image source={Img} style={styles.largeimage} />
        <Picker selectedValue={"a"}>
             <Picker.Item label="AAA" value="a" />
             <Picker.Item label="BBB" value="b" />
             <Picker.Item label="CCC" value="c" />
        </Picker>
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
  largeimage: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});
