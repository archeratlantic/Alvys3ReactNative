import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function LargeButton(props) {
  const { onPress, title = "Save" } = props;
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", top: "25%", right: 0, left: 0 }}>
        <ActivityIndicator animating={false} size="large" color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 60,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#233E90",
    maxWidth: 350,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
