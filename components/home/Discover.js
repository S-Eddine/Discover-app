import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../assets/colors/colors";
import DiscoveryItem from "./items/DiscoveryItem";

import discoverData from "../../assets/data/discoverData";

const Discover = ({navigation}) => {
  return (
    <>
      <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Discover</Text>
        <View style={styles.discoverCategoriesWrapper}>
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
    </>
  );
};

const styles = StyleSheet.create({
  discoverWrapper: {
    marginHorizontal: 20,
  },
  discoverTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
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
});

export default Discover;
