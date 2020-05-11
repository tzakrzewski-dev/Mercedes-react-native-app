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
  Header,
  Button,
  Body,
  Title,
} from 'native-base';
import dataCatalogue from '../../../../data/catalogue.json';

import ModelClasseA from './ModelClasseA';

class ClasseA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogue: [],
      apikey: '74b5a34d-8a75-4dd7-a1d6-40a3d5a55f78',
      price: '',
    };
  }

  static navigationOptions = {
    drawerLabel: 'Classe A',
    title: 'ClasseA',
  };

  componentDidMount() {
    /*
    //////Récupération des data Mercedes par modele
    fetch(
      'https://api.mercedes-benz.com/configurator/v1/markets/fr_FR/models?bodyId=LIMOUSINE&apikey=74b5a34d-8a75-4dd7-a1d6-40a3d5a55f78',
    )
      .then(response => response.json())
      .then(data => {
        {
          const bodyNames = data
            .filter(p => String(p.modelId).startsWith('177'))
            .map(element => element.shortName); //Filtre et Map de la propriété bodyName
          const orderBodyNames = bodyNames.sort(); //Rangement par ordre alphabétique
          this.setState({modele: orderBodyNames}, console.log(this.state));
        }
        console.log(data);
      });*/

    /**
     * Ajout de filtre pour présentation et limiter le nombre de référence
     */
    const listeData = dataCatalogue
      .filter(
        reading =>
          String(reading.vehicleBody.bodyName).startsWith('Berline') &&
          reading.vehicleClass.className === 'Classe A',
        //&& reading.baumuster === '1771141',
      )
      .sort();
    this.setState({catalogue: listeData}, () =>
      console.log(this.state.catalogue),
    );
  }

  formatDisplay = () => {
    return this.state.catalogue.map((reading, index) => (
      <ModelClasseA reading={reading} key={index} />
    ));
  }; //

  render() {
    console.log(this.formatDisplay());
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Modele')}>
              <Icon name="arrow-back" />
              <Text>Modèle</Text>
            </Button>
          </Left>
          <Body>
            <Title>Classe A</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() =>
                this.props.navigation.navigate('ClasseAtechnical')
              }>
              <Icon name="arrow-forward" />
              <Text>Technical Data</Text>
            </Button>
          </Right>
        </Header>

        {this.formatDisplay()}
      </Container>
    );
  }
}

export default ClasseA;
