import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import colors from "../../assets/colors/colors";
import learnMoreData from "../../assets/data/learnMoreData";

const LearnMore = () => {
  const renderLearnMoreItem = ({ item }) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === "learnMore-1" ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}
      >
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default LearnMore;
