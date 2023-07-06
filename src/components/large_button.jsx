import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import Lottie from 'lottie-react-native';


export default function LargeButton(props) {
  const { onPress, title = "Save", isDisabled } = props;
  return (
    <View>
          <Lottie source={require('../path/to/animation.json')} autoPlay loop />

      <Pressable style={[styles.button, isDisabled? styles.disabledButton: styles.enabledButton]} onPress={onPress} disabled={isDisabled}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 10,
    elevation: 3,
    width: 350,
    minWidth: 300,
  },
  disabledButton:{
    backgroundColor:"#7C7C7C"
  }, 
  enabledButton:{
    backgroundColor: "#233E90",
  }, 
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
