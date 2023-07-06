import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LargeButton from "../../components/large_button";

export default function NotificationPermissionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Image style={styles.image} source={require("../../../assets/notification_icon.png")} />
      <Text style={styles.label}>
      Get notified when you are assigned a load and other critical updates.
      </Text>
      <LargeButton title="Continue"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:30,
  },
  title:{
    fontSize: 30,
    textAlign: "center",
    marginBottom: 12,
    fontFamily:'poppins-bold',           
  },
  image:{
    width: 87,
    height: 87,
    marginBottom: 30
  },
  label:{
    fontFamily:'poppins-regular',
    fontSize:16,
    textAlign: "center",
    marginBottom: 36
  }
  
});
