import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView } from "react-native";
import Colors from "../utils/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAewsome from "react-native-vector-icons/FontAwesome";
import Category from "./Category";
import Popular from "./Popular";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PopularData from "../utils/PopularData";
import CategoryData from "../utils/CategoryData";

export default function App({ navigation }) {
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

  const renderItemCategories = ({ item }) => <Category title={item.title} {...item} />;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.background} />
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior={"automatic"}>
        <View style={styles.header}>
          <View style={styles.menuBar}>
            <Image style={styles.image} source={require("../assets/profile.png")} />
            <Icon style={styles.menu} name="menu" size={34} />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.title}>
            <Text style={{ fontSize: 16, color: Colors.text1, fontFamily: "regular" }}>Food</Text>
            <Text style={{ fontSize: 32, color: Colors.text1, fontFamily: "bold" }}>Delivery</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, flexDirection: "row", alignItems: "center", marginTop: 30 }}>
          <FontAewsome name="search" style={{ fontSize: 16 }} />
          <TextInput style={styles.search} placeholder="Search..."></TextInput>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 16, fontFamily: "bold", marginHorizontal: 20 }}>Categories</Text>
          <FlatList horizontal={true} data={CategoryData} renderItem={renderItemCategories}></FlatList>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontFamily: "bold", marginHorizontal: 20, marginBottom: 11 }}>Popular</Text>
          <View style={{ alignItems: "center" }}>
            {PopularData.map((item) => (
              <Popular key={item.id} item={item} Nav={navigation} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    marginTop: 60,
  },
  menuBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  menu: {
    fontSize: 24,
  },
  title: {
    paddingHorizontal: 20,
  },
  search: {
    fontSize: 14,
    borderBottomColor: Colors.text2,
    borderBottomWidth: 2,
    width: "90%",
    marginHorizontal: 12,
    color: Colors.text2,
    fontFamily: "semibold",
  },
});
