import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../../../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const DiscoveryItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          item,
        })
      }
    >
      <ImageBackground
        source={item.image}
        style={styles.discoverItem}
        imageStyle={styles.discoverItemImage}
      >
        <Text style={styles.discoverItemTitle}>{item.title}</Text>
        <View style={styles.discoverItemLocationWrapper}>
          <Entypo name="location-pin" size={18} color={colors.white} />
          <Text style={styles.discoverItemLocationText}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.white,
  },
});

export default DiscoveryItem;
