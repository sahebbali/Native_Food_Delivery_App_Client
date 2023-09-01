import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/categories";
import FeatureRow from "../components/featuredRow";
import { getFeaturedResturants } from "../api";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    getFeaturedResturants().then((data) => {
      console.log({ data });
      setFeaturedCategories(data);
    });
  }, []);
  console.log(featuredCategories);
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View style={styles.container}>
        <View style={styles.viewcontainer}>
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            style={{ marginLeft: 2, flex: 1 }}
            placeholder="Resturants"
            keyboardType="default"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.25rem",
              borderLeftWidth: "2px",
              paddingLeft: "0.5rem",
              borderLeftColor: "gray-300",
            }}
          >
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text style={{ color: "gray" }}>New York, NYC</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor(1),
            padding: "0.75rem",
            borderRadius: "0.5rem",
            marginTop: 10,
          }}
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        {/* <View className="mt-5">
          {featuredCategories?.map((category) => {
            return (
              <FeatureRow
                key={category._id}
                id={category._id}
                title={category.name}
                resturants={category?.resturants}
                description={category.description}
                featuredCategory={category._type}
              />
            );
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Flex direction to create a row layout
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Space between items horizontally
    paddingHorizontal: 4, // Horizontal padding of 4
    paddingBottom: 2, // Bottom padding of 2
  },
  viewcontainer: {
    flexDirection: "row", // Flex direction to create a row layout
    flex: 1, // Flex 1 to expand and fill available space
    alignItems: "center", // Center items vertically
    padding: 3, // Padding of 3 on all sides
    borderRadius: 999, // Use a large value for rounded full border
    borderWidth: 1, // Border width of 1
    borderColor: "gray", // Border color (you can replace 'gray' with the desired color)
    margin: 5,
  },
});
