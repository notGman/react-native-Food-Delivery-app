import { useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAewsome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ingredient from "./Ingredient";

export default function Details({ route, navigation }) {
  const { item } = route.params;
  // console.log(item.ingredients);
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

  const renderIngredient = ({ item }) => {
    return <Ingredient imgItem={item} />;
  };

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior={"automatic"}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backIcon}>
              <Icon size={20} name="chevron-left" />
            </View>
          </TouchableOpacity>
          <View style={styles.star}>
            <Icon size={20} name="star" color={Colors.background} />
          </View>
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <View>
            <Text style={{ fontFamily: "bold", color: Colors.text1, fontSize: 32, width: 172 }}>{item.title}</Text>
          </View>
          <View>
            <Text style={{ fontFamily: "semibold", fontSize: 32, color: Colors.price, marginTop: 20 }}>${item.price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginHorizontal: 20, marginTop: 30 }}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.titles}>Size</Text>
              <Text style={styles.values}>
                {item.sizeName} {item.sizeNumber}''
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.titles}>Crust</Text>
              <Text style={styles.values}>{item.crust}</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.titles}>Delivery in</Text>
              <Text style={styles.values}>{item.deliveryTime} mins</Text>
            </View>
          </View>
          <View style={{ marginTop: 36 }}>
            <Image source={item.image} style={{ resizeMode: "contain", height: 176, width: 296 }} />
          </View>
        </View>
        <View>
          <Text style={{ fontFamily: "bold", fontSize: 16, marginLeft: 20, marginTop: 60 }}>Ingredients</Text>
          <FlatList data={item.ingredients} renderItem={renderIngredient} keyExtractor={(item) => item.id} horizontal={true} />
        </View>
        <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }} onPress={() => alert("Your order has been placed!")}>
          <View style={styles.order}>
            <Text>Place an order</Text>
            <Icon name="chevron-right" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIcon: {
    height: 40,
    width: 40,
    borderColor: Colors.text2,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  star: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  titles: {
    fontFamily: "medium",
    fontSize: 14,
    color: Colors.text2,
  },
  values: {
    fontFamily: "semibold",
    fontSize: 16,
    marginTop: 5,
  },
  order: {
    width: 335,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
});
