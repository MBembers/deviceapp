import React, { Component } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import Img from "./test.png";
import * as Device from "expo-device";
import MyButton from "./MyButton";
import ListItem from "./ListItem.js";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceInfo: [],
    };
    this.getDevices();
  }
  async getDevices() {
    const device_info = [
      { id: 1, value: Device.brand, key: "brand" },
      { id: 2, value: Device.deviceName, key: "deviceName" },
      { id: 3, value: Device.manufacturer, key: "manufacturer" },
      { id: 4, value: Device.modelName, key: "modelName" },
      { id: 5, value: await Device.getDeviceTypeAsync(), key: "deviceType" },
      { id: 6, value: await Device.getMaxMemoryAsync(), key: "maxMemory" },
      { id: 7, value: Device.osName, key: "osName" },
      { id: 8, value: Device.osVersion, key: "osVersion" },
      { id: 9, value: Device.platformApiLevel, key: "platformApiLevel" },
      { id: 10, value: Device.totalMemory, key: "totalMemory" },
      { id: 11, value: Device.productName, key: "productName" },
    ];
    this.setState({ deviceInfo: device_info });
  }
  render() {
    let data = this.state.deviceInfo;
    console.log("data:", data);
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({ item }) => <ListItem data={item}></ListItem>}
          keyExtractor={(item) => item.id.toString()}
        />
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
    color: "white",
  },
  flatlist: {
    width: "100%",
  },
});
