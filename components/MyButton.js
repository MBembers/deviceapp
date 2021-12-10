import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={this.pressFunc}>
        <Text> {this.props.text} </Text>
      </TouchableOpacity>
    );
  }
}
MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  pressFunc: PropTypes.func.isRequired,
};
