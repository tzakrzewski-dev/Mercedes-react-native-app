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
import dataClassA220 from '../../../../data/ClasseA-220.json';

import ModelClasseAtechnical from './ModelClasseAtechnical';

class ClasseAtechnical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogue: [],
      apikey: '74b5a34d-8a75-4dd7-a1d6-40a3d5a55f78',
      price: '',
    };
  }

  static navigationOptions = {
    drawerLabel: 'Classe A Technical',
    title: 'ClasseAtechnical',
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
    const listeData = dataClassA220.map(reading => reading);
    this.setState({catalogue: listeData}, () =>
      console.log(this.state.catalogue),
    );
  }

  formatDisplay = () => {
    return this.state.catalogue.map((reading, index) => (
      <ModelClasseAtechnical reading={reading} key={index} />
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
              onPress={() => this.props.navigation.navigate('ClasseA')}>
              <Icon name="arrow-back" />
              <Text>Modèle</Text>
            </Button>
          </Left>
          <Body>
            <Title>Techical data</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('ClasseA')}>
              <Icon name="arrow-forward" />
              <Text>test</Text>
            </Button>
          </Right>
        </Header>
        {this.formatDisplay()}
      </Container>
    );
  }
}

export default ClasseAtechnical;
