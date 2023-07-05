import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import LargeButton from "../../components/large_button";
import PhoneNumberInput from "../../components/phonenumberInput";
import OtpInput from "../../components/otp_input";

export default function PhoneNumberScreen() {
  return (
    
<View style={styles.container}>
    <Text style={styles.title}>Enter your 10 digit {"\n"} phone number</Text>
    <Text style={styles.label}>A text message with a verification code will be sent to the number.</Text>
    <PhoneNumberInput mask="(999) 999-9999" placeholder="(###) ###-####"/>
    <OtpInput/>
    <LargeButton title = "Continue"/>
  </View>);
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal:25,
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    marginTop:-300,   
  },
  title:{
    fontSize: 30,
    textAlign: "center",
    marginBottom: 12,
    fontFamily:'Poppins_700Bold',       
  },
  label:{
    fontFamily:'Poppins_400Regular',
    fontSize:16,
    textAlign: "center",
    marginBottom: 36
  }
});
