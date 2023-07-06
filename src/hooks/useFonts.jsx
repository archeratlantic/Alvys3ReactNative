import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
      "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
      "poppins-medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    });
};