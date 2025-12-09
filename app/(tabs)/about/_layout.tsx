import React from "react";
import { router, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TouchableOpacity } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator as any);

export default function AboutLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#244e35ff",
        tabBarInactiveTintColor: "#777",
        tabBarIndicatorStyle: { backgroundColor: "#17e46dff", height: 3 },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          textTransform: "none",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: "#ccc",
        },
      }}
    >
      <MaterialTopTabs.Screen name="overview" options={{ title: "Overview" }} />
      {/* <MaterialTopTabs.Screen
        name="vision"
        options={{ title: "Vision & Mission" }
      }
      /> */}
      <MaterialTopTabs.Screen
        name="founders"
        options={{ title: "Founder’s Message" }}
      />
      <MaterialTopTabs.Screen
        name="president"
        options={{ title: "President’s Message" }}
      />
      <MaterialTopTabs.Screen
        name="core-values"
        options={{ title: "Core Values" }}
      />
    </MaterialTopTabs>
  );
}

