import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";
import { themeColors } from "../theme";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      console.log("got data", data[0].name);
      setCategories(data);
    });
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ overflow: "visible" }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories?.map((category) => {
          const isActive = category._id === activeCategory;

          return (
            <View
              key={category._id}
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 6,
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                style={{
                  backgroundColor: isActive ? "#6B7280" : "#E5E7EB",
                  padding: 8,
                  borderRadius: 999, // Use a large value for rounded full buttons
                  shadowColor: isActive ? "#6B7280" : "transparent",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: isActive ? 0.5 : 0,
                  shadowRadius: 1,
                }}
              >
                <Image
                  style={{ width: 45, height: 45, borderRadius: 100 }}
                  source={{
                    uri: urlFor(category.image),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14, // Adjust font size as needed
                  fontWeight: isActive ? "600" : "normal",
                  color: isActive ? "#1F2937" : "#9CA3AF",
                }}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
