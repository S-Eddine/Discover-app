import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  ImageBackground
} from "react-native";
import colors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../../assets/images/person.png";
import DiscoveryItem from "./DiscoveryItem";

import discoverData from "../../assets/data/discoverData";
import activitiesData from "../../assets/data/activitiesData";
import learnMoreData from '../../assets/data/learnMoreData';

const Home = ({ navigation }) => {
  const renderActivityItem = ({ item }) => {
    return (
      <View style={styles.activityItemWrapper}>
        <Image source={item.image} style={styles.activityItemImage}></Image>
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
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
            renderItem={({ item }) => (
              <DiscoveryItem item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
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
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  //
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  //
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
  },
  activityItemImage: {},
  activityItemText: {
    marginTop: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.gray,
  },

  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Home;
