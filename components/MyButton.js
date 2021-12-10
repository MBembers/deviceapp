import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={{ ...styles.button, ...this.props.style }}
        disabled={this.props.disabled}
        onPress={this.props.pressFunc}
      >
        <Text style={styles.text}> {this.props.text} </Text>
      </TouchableOpacity>
    );
  }
}
MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  pressFunc: PropTypes.func.isRequired,
};
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
    color: "#eee",
    fontSize: 15,
    textAlign: "center",
  },
  textSm: {
    color: "#ddd",
    fontSize: 14,
  },
  flatitem: {
    color: "#fff",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  button: {
    width: 120,
    height: 45,
    backgroundColor: "#777777",
    borderRadius: 4,
  },
});
