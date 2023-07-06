import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LargeButton from "../../components/large_button";

export default function LocationPermissionScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Image style={styles.image} source={require("../../../assets/track_icon.png")} />
      <Text style={styles.label}>
        Alvys uses your location data to track the movement of loads you have
        been assigned.
      </Text>
      <LargeButton title="Continue" onPress={()=> navigation.push("NotificationPermission")}/>
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
    width: 125,
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
