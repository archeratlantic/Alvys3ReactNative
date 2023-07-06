import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import LargeButton from "../../components/large_button";
import * as Location from 'expo-location';
import TextButton from "../../components/text_button";

export default function LocationPermissionScreen({navigation}) {

  const requestLocationPermission = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();

    if(status !== 'granted'){
      console.log("Location Access Denied");
      return;
    }else {
      navigation.push("NotificationPermission");
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    }   
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Image style={styles.image} source={require("../../../assets/track_icon.png")} />
      <Text style={styles.label}>
        Alvys uses your location data to track the movement of loads you have
        been assigned.
      </Text>
      <LargeButton title="Continue" onPress={()=> requestLocationPermission()}/>
      <TextButton title="Not now" onPress={()=> navigation.push("NotificationPermission")}/>      
    </SafeAreaView>
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
