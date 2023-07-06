import React, { useState, useEffect, useCallback } from "react";
import {  StyleSheet, StatusBar, View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import LocationPermissionScreen from "./src/views/permissions/location_screen";
import NotificationPermissionScreen from "./src/views/permissions/notification_screen";
import VerificationScreen from "./src/views/signin/verification";
import PhoneNumberScreen from "./src/views/signin/phonenumber";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useFonts from './src/hooks/useFonts';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() =>{ 
    async function prepare() {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Text style={{color:"#000", fontSize:20}}>Loading...</Text>;
  }

  return (      

    <NavigationContainer onReady={onLayoutRootView}>
       <StatusBar barStyle="dark-content"/>
        <Stack.Navigator>
          <Stack.Screen name="PhoneNumberLogin" component={PhoneNumberScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyPhoneNumber" component={VerificationScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NotificationPermission" component={NotificationPermissionScreen} options={{ headerShown: false }} />       
        </Stack.Navigator>      
    </NavigationContainer>    
     
      
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1
}
})
