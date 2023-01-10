import { useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAewsome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Ingredient({ imgItem }) {
  const [fontsLoaded] = useFonts({
    regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    semibold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={[styles.container, { marginLeft: imgItem.id == "1" ? 20 : 0 }]}>
      <Image source={imgItem.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 80,
    width: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 19,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 58,
  },
});
