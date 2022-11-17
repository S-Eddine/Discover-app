import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import colors from "../../assets/colors/colors";
import activitiesData from "../../assets/data/activitiesData";

const Activities = () => {
  const renderActivityItem = ({ item }) => {
    return (
      <View style={styles.activityItemWrapper}>
        <Image source={item.image} style={styles.activityItemImage}></Image>
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  return (
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
  );
};

const styles = StyleSheet.create({
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
    },});

export default Activities;
