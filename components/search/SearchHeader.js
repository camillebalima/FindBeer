import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Item, Icon, Input } from "native-base";

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header style={styles.header} searchBar rounded>
        <Item style={styles.searchInput}>
          <Icon style={styles.icon} name="ios-search" />
          <Input
            placeholder="Enter Beer Name"
            returnKeyType="search"
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.beerSearch}
          />
        </Item>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#194757",
  },
  searchInput: {},
  icon: {
    color: "#194757",
  },
});
