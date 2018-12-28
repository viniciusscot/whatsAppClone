import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";

export default props => {
  return (
    <ImageBackground
      style={{ flex: 1, width: null }}
      source={require("../imgs/bg.png")}
    >
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.textInput}>{"Seja Bem-Vindo"}</Text>
          <Image source={require("../imgs/logo.png")} />
        </View>
        <View style={styles.box2}>
          <Button
            title="Fazer Login"
            color="#115E54"
            onPress={() => Actions.formLogin()}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  box1: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  box2: {
    flex: 1
  },
  textInput: {
    fontSize: 20,
    color: "#fff"
  }
});
