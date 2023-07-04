import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function TextField(props) {
  const { placeholder, keyboardType, onChange, value } = props;

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 350,
    margin: 12,
    borderWidth: 1,
    borderColor: "#233E90",
    padding: 10,
    borderRadius: 10
  },
});
