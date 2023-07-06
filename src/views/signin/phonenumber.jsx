import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import LargeButton from "../../components/large_button";
import PhoneNumberInput from "../../components/phonenumberInput";

export default function PhoneNumberScreen({navigation}) {
  return (
    
<View style={styles.container}>
    <Text style={styles.title}>Enter your 10 digit {"\n"} phone number</Text>
    <Text style={styles.label}>A text message with a verification code will be sent to the number.</Text>
    <PhoneNumberInput mask="(999) 999-9999" placeholder="(###) ###-####" autoFocus={true} keyboardType="phone-pad"/>
    
    <LargeButton title = "Continue" isDisabled={false} isLoading={false} onPress={() => navigation.push('VerifyPhoneNumber')}/>
  </View>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    marginTop:-300, 
    paddingHorizontal: 30  
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
