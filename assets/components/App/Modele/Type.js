import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Text,
  Container,
  Content,
  Right,
  Icon,
  Button,
  Grid,
  Row,
  Header,
  Body,
  Title,
  Thumbnail,
} from 'native-base';

import dataModele from '../../../data/modele.json';

function Item({title, img}) {
  return (
    <View>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{img}} />
            </Left>
            <Body>
              <Text style={{fontSize: 24, margin: 8, textAlign: 'center'}}>
                {title}
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>Découvir</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </View>
  );
}

class Modele extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modele: [],
      apikey: '74b5a34d-8a75-4dd7-a1d6-40a3d5a55f78',
    };
  }

  static navigationOptions = {
    drawerLabel: 'Modèle',
    title: 'Modele',
  };

  componentDidMount() {
    //////Récupération des data Mercedes par modele
    /***** 
    fetch(
      'https://api.mercedes-benz.com/configurator/v1/markets/fr_FR/models?classId=E-KLASSE&apikey=74b5a34d-8a75-4dd7-a1d6-40a3d5a55f78',
    )
      .then(response => response.json())
      .then(data => {
        {
          const bodyNames = data.map(element => element.bodyName); //Map de la propriété bodyName
          const orderBodyNames = bodyNames.sort(); //Rangement par ordre alphabétique
          this.setState({modele: orderBodyNames}, console.log(this.state));
        }
        console.log(data);
      });*/

    this.setState({modele: dataModele});
  }

  render() {
    let model = this.state.modele;

    console.log(model);

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('App')}>
              <Icon name="arrow-back" />
              <Text>Accueil</Text>
            </Button>
          </Left>
          <Body>
            <Title>Type</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <SafeAreaView>
          <FlatList
            data={this.state.modele}
            renderItem={({item}) => (
              <Item title={item.bodyName} img={item.img} />
            )}
            keyExtractor={item => item.bodyId}
          />
        </SafeAreaView>
      </Container>
    );
  }
}

export default Modele;
