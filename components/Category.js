import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Colors from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

const Category = ({ id, title, imgUrl, selected }) => {
  const [fontsLoaded] = useFonts({
    regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    semibold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: selected == true ? Colors.primary : Colors.white },
        { marginLeft: id == 1 ? 20 : 0 },
      ]}
    >
      <Image source={imgUrl} style={styles.pizza} />
      <Text style={{ fontSize: 14, fontFamily: "semibold", marginTop: 10 }}>{title}</Text>
      <TouchableOpacity style={[styles.arrow, { backgroundColor: selected != true ? Colors.secondary : Colors.white }]}>
        <Icon name="chevron-right" style={{ color: selected != true ? Colors.white : Colors.text1, fontSize: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 177,
    borderRadius: 20,
    alignItems: "center",
    marginRight: 20,
    marginTop: 15,
    marginBottom: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  pizza: {
    marginTop: 24,
    height: 60,
    width: 60,
  },
  arrow: {
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 20,
  },
});
export default Category;
