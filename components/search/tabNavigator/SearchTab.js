import React, { Component } from "react";
import { View, Text, Alert, Keyboard } from "react-native";
import { Container, Content } from "native-base";
import SearchHeader from "../SearchHeader";
import Axios from "axios";

export default class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBeer: "",
      beerData: "",
    };
  }

  render() {
    const beerSearch = () => {
      Keyboard.dismiss();
      const beerName = this.state.searchBeer.toLocaleLowerCase();

      const query =
        `https://sandbox-api.brewerydb.com/v2/search?q=` +
        beerName +
        `&type=beer&key=4516d7ecb50b9a7e73b88690980fc088`;
      const query2 =
        `https://api.brewerydb.com/v2/search?q=` +
        beerName +
        `&type=beer&key=2e97681b46666b733eaf24a940bc7e85`;

      Axios.get(query2).then((response) => {
        let data = response.data.data[0] ? response.data[0] : false;
        console.log("+++++++++++++++++++++++TEST+++++++++++++++++++++++++")
        console.log(data);
      });
    };
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={(searchBeer) => this.setState({ searchBeer })}
          beerSearch={beerSearch}
        />
        <Content></Content>
      </Container>
    );
  }
}
