import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../assets/images/person.png";
import discoverData from "../assets/data/discoverData";
import Entypo from "react-native-vector-icons/Entypo";

const Home = ({ navigation }) => {
  const renderDiscoveryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {
        item
      })}>
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCaategoriesWrapper}>
            {["All", "Destination", "Cities", "Experience"].map((title) => {
              return (
                <Text
                  style={styles.discoverCategoryText}
                  key={title}
                  title={title}
                >
                  {title}
                </Text>
              );
            })}
          </View>
        </View>

        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={discoverData}
            renderItem={renderDiscoveryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 32,
  },
  discoverCaategoriesWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    fontSize: 16,
    marginRight: 30,
    fontFamily: "Lato-Regular",
    color: colors.gray,
  },
  discoverItemsWrapper:{
    paddingVertical: 20
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 20
  },
  discoverItemImage: {
    borderRadius: 20
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white
  },
});

export default Home;
