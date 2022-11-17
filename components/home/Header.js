import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Image, StyleSheet} from 'react-native' 
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";
import profile from "../../assets/images/person.png";


const Header = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
})

export default Header;