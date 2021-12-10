import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import MyButton from "./MyButton";
import Img from "./test.png";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={Img} />
        <View>
          <Text style={styles.text}> {this.props.data.key} </Text>
          <Text style={styles.textSm}> {this.props.data.value} </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#fff",
    borderStyle: "solid",
    height: 50,
    padding: 10,
    marginTop: 10,
    marginBottom: 25,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textSm: {
    color: "#ddd",
    fontSize: 15,
  },
  flatitem: {
    color: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});
