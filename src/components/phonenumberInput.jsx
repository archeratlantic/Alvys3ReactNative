import { MaskedTextInput } from "react-native-mask-text";

import React from "react";
import { StyleSheet } from "react-native";

export default function PhoneNumberInput(props) {
  const { placeholder, keyboardType, onChange, autoFocus, mask } = props;

  return (
    <MaskedTextInput
      mask={mask}
      placeholder={placeholder}
      onChangeText={(text, rawText) => {
        console.log(text);
        console.log(rawText);
      }}
      keyboardType={keyboardType}
      autoFocus={autoFocus}
      style={styles.input}
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
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center"
  },
});
