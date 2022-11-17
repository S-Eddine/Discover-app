import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Home from "./components/home/index";
import Liked from "./components/Liked";
import Profile from "./components/Profile";
import colors from "./assets/colors/colors";
import Details from "./components/Details";
import { useState } from "react";
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let customFonts = {
  "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={32} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={32} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, setIsFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setIsFontsLoaded(true)
  }

  useState(() => {
    loadFontsAsync().catch(e => console.log(e))
  }, [])

  if (!fontsLoaded) {
    return <View><Text>Loading font...</Text></View>;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <View style={styles.container}>
<Text style={styles.title}>سلام</Text>
<Text style={styles.subtitle}>مرحبا بكم في تطبيق الختمة الجماعية.</Text>
<StatusBar style="auto" />
</View> */
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
    direction: "rtl",
  },
  title: {
    fontSize: "64px",
    marginLeft: "5%",
    writingDirection: "rtl",
  },
  subtitle: {
    fontSize: "32px",
    marginLeft: "5%",
    writingDirection: "rtl",
  },
});
