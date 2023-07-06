import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function TextButton(props) {
  const { onPress, title = "Save" } = props;

  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
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
    elevation: 3,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#233E90",
  },
});
