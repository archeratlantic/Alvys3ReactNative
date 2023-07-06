import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";


export default function LargeButton(props) {
  const { onPress, title = "Save", isDisabled=false, isLoading=false} = props;

  return (
    <View>
      <Pressable style={[styles.button, isLoading&&isDisabled? styles.disabledButton: styles.enabledButton]} onPress={onPress} disabled={isDisabled}>
      

        {!isLoading ?   <Text style={styles.text}>{title}</Text> : <ActivityIndicator size="large" color="#233E90" />}

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
    backgroundColor: '#ADB8D9',
  }, 
  enabledButton:{
    backgroundColor: '#233E90',
  }, 
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
