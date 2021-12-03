import React from "react";

import {
  createStackNavigator,
//   TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "./../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "./../../features/restaurants/screens/restaurant-detail.screen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';




import { Text, View } from "react-native";

// const RestaurantStack = createStackNavigator();
const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
    //   headerMode="none"
    headerShown={false}
      screenOptions={{
        // ...TransitionPresets.ModalPresentationIOS,
        // presentation: 'modal'
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
