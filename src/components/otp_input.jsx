import React from "react";
import { StyleSheet } from "react-native";
import OTPTextView from 'react-native-otp-textinput';

export default function OtpInput(props) {
    const { placeholder, keyboardType, onChange, autoFocus, ref } = props;

return (
    <OTPTextView
    ref={ref}
    containerStyle={styles.textInputContainer}
    textInputStyle={styles.input}
    handleTextChange={(text, rawText) => {
        console.log(text);
        console.log(rawText);
      }}
    inputCount={6}
    inputCellLength={1}
    keyboardType="numeric"
  />
)
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 50,    
    borderWidth: 1,
    borderColor: "#233E90",
    
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center"

  },
  textInputContainer: {
    marginBottom: 20,

  },
});
