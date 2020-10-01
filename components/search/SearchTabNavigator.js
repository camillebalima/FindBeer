import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouritesTab from "./tabNavigator/FavouritesTab";
import SearchTab from "./tabNavigator/SearchTab";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

class SearchTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tab.Navigator
      tabBarOptions={{
        labelStyle:{
          fontSize: 15,
        }
      }}>
        <Tab.Screen
          name="Search"
          component={SearchTab}
          options={{
            tabBarLabel: "Search".toUpperCase(), 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="beer" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesTab}
          options={{
            tabBarLabel: "Favoutites".toUpperCase(),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="star-four-points" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default SearchTabNavigator;
