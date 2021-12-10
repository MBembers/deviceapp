import React, { Component } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import Img from "./test.png";
import * as Device from "expo-device";
import MyButton from "./MyButton.js";
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
      {
        id: 1,
        value: Device.brand,
        key: "brand",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 2,
        value: Device.deviceName,
        key: "deviceName",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 3,
        value: Device.manufacturer,
        key: "manufacturer",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 4,
        value: Device.modelName,
        key: "modelName",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 5,
        value: await Device.getDeviceTypeAsync(),
        key: "deviceType",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 6,
        value: await Device.getMaxMemoryAsync(),
        key: "maxMemory",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 7,
        value: Device.osName,
        key: "osName",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 8,
        value: Device.osVersion,
        key: "osVersion",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 9,
        value: Device.platformApiLevel,
        key: "platformApiLevel",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 10,
        value: Device.totalMemory,
        key: "totalMemory",
        func: this.deleteInfo.bind(this),
      },
      {
        id: 11,
        value: Device.productName,
        key: "productName",
        func: this.deleteInfo.bind(this),
      },
    ];
    this.setState({ deviceInfo: device_info });
  }
  deleteInfo(id) {
    let device_info = this.state.deviceInfo;
    device_info = device_info.filter((d) => d.id != id);
    this.setState({ deviceInfo: device_info });
  }
  render() {
    let data = this.state.deviceInfo;
    console.log("data:", data);
    return (
      <View style={styles.container}>
        <View>
          <MyButton
            style={styles.refbutton}
            text={"REFRESH"}
            pressFunc={this.getDevices.bind(this)}
          ></MyButton>
        </View>
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
  refbutton: {
    justifyContent: "center",
    marginTop: 10,
  },
});
