import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
} from "react-native";
import Colors from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

const Popular = ({ Nav, item }) => {
  const { title, image, weight, rating } = item;
  const [fontsLoaded] = useFonts({
    regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    semibold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  return (
    <TouchableNativeFeedback
      onPress={() =>
        Nav.navigate("Details", {
          item: item,
        })
      }
      style={{ borderRadius: 25 }}
    >
      <View style={styles.container}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}>
            <Icon name="crown" color={Colors.primary} style={{ marginLeft: 20, marginRight: 10, fontSize: 20 }} />
            <Text style={{ fontSize: 14, fontFamily: "semibold", lineHeight: 17 }}>top of the Week</Text>
          </View>
          <View>
            <Text style={{ fontSize: 14, fontFamily: "semibold", marginTop: 20, marginLeft: 22, lineHeight: 17 }}>{title}</Text>
            <Text
              style={{ fontSize: 12, fontFamily: "medium", color: Colors.text2, marginTop: 5, marginLeft: 22, lineHeight: 15 }}
            >
              Weight {weight}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <View style={styles.plusicon}>
              <Icon name="plus" style={{ fontSize: 18 }} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="star" size={10} style={{ marginLeft: 20, marginRight: 5 }} />
              <Text style={{ fontSize: 12, fontFamily: "semibold" }}>{rating}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 18, marginLeft: 20 }}>
          <Image source={image} style={{ height: 125, width: 210, resizeMode: "contain" }} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 161,
    width: 325,
    flexDirection: "row",
    borderRadius: 25,
    overflow: "hidden",
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
  plusicon: {
    width: 90,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default Popular;
