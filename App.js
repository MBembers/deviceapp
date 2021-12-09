import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Info from "./components/Info";
import Home from "./components/Home";
import Img from "./components/test.png";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Image source={Img} style={styles.icons} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarIcon: () => <Image source={Img} style={styles.icons} />,
            title: "Device info",
            headerStyle: {
              backgroundColor: "darkslategrey",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    width: 25,
    height: 25,
  },
});
