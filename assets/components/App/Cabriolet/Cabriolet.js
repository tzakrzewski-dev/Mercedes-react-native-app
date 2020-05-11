import React, {Component} from 'react';

import {View} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Text,
  Container,
  Content,
  Right,
  Icon,
} from 'native-base';

import dataCatalogue from '../../../../data/catalogue.json';

class Cabriolet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogue: [],
      apikey: '74b5a34d-8a75-4dd7-a1d6-40a3d5a55f78',
      price: '',
    };
  }

  static navigationOptions = {
    drawerLabel: 'Cabriolet',
    title: 'Cabriolet',
  };

  componentDidMount() {
    const listeData = dataCatalogue
      .filter(reading => String(reading.name).startsWith('Classe A'))
      .sort();
    this.setState({catalogue: listeData}, () =>
      console.log(this.state.catalogue),
    );
  }

  render() {
    return (
      <View>
        <Text>Page modele</Text>
      </View>
    );
  }
}

export default Modele;
