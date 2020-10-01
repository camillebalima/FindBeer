import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Icon } from "native-base";

const backgroundImage = require("../../assets/HomeScreen/home_screen_background.jpg");

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.home}>
        <View style={styles.backgroundContainer}>
          <Image style={styles.backgroundImage} source={backgroundImage} />
        </View>
        <View style={styles.searchButtonContainer}>
          <Button
            transparent
            iconLeft
            block={true}
            onPress={() => this.props.navigation.navigate("Details")}
          >
            <Icon style={styles.icon} name="search" />
            <Text style={styles.searchText}>Search Beers</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "flex-end",
  },
  searchText: {
    color: "#fff",
    fontSize: 25,
  },

  searchButtonContainer: {
    backgroundColor: "#519872",
  },

  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: " 100%",
  },

  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
  },
  icon: {
    marginRight: 10,
    color: "#fff",
  },
});
export default HomeScreen;
