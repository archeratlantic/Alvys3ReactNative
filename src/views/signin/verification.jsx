import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import LargeButton from "../../components/large_button";
import OtpInput from "../../components/otp_input";

export default function VerificationScreen({navigation}) {
  return (
    
<View style={styles.container}>
    <Text style={styles.title}>Verification</Text>
    <Text style={styles.label}>Enter the code sent to the number</Text>

    <OtpInput/>
    <LargeButton title = "Verify" onPress={()=> navigation.push("LocationPermission")}/>
  </View>); 
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    marginTop:-300,   
  },
  title:{
    fontSize: 30,
    textAlign: "center",
    marginBottom: 12,
    fontFamily:'poppins-bold',       
  },
  label:{
    fontFamily:'poppins-regular',
    fontSize:16,
    textAlign: "center",
    marginBottom: 36
  }
});
