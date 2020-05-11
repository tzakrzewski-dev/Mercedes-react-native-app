import React, {Component} from 'react';

import {Image, ImageBackground} from 'react-native';
import {
  Tabs,
  Tab,
  Header,
  Left,
  Body,
  Icon,
  Grid,
  Right,
  Row,
  Col,
  Text,
  Button,
  Container,
} from 'native-base';

import style from '../../../stylesheet/home';
import Modele from '../Modele/Modele';
import ClasseA from '../Modele/ClasseA/ClasseA';

import background from '../../../images/background.jpg';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Accueil',
    title: 'App',
  };

  render() {
    return (
      <Container>
        <Grid style={{height: 100}}>
          <Row style={{height: 100}}>
            <Col
              style={{
                height: 'auto',
                textAlign: 'center',
                alignContent: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '400',
                  textAlign: 'center',
                  textAlignVertical: 'auto',
                  margin: 5,
                  height: 30,
                }}>
                Mercedes
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: '400',
                  textAlign: 'center',
                  textAlignVertical: 'auto',
                }}>
                Configurateur
              </Text>
            </Col>
            <Col>
              <Image
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}
                style={{width: 'auto', height: 100}}
              />
            </Col>
          </Row>
          <Row style={{backgroundColor: 'orange', height: 'auto'}}>
            <Image
              source={{
                uri:
                  'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqb8FqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9e9F9Q6FjcBXBUuXGEAa3J0l5oVOB2CSRbApzIVI5u7KqQC3dhRkzNftxm7jE21hKV1SM%25vqwt%25yLRZLVYaxF0WrH19M%25n8wDTboiZWkgM4FdmwTg9fY36PDES6SeWumItsd3YQcUfNF6XGEj9wJ0leYJOB2s8nbApUkCI5uGfDQC30XFkzNBJ6m7j86ZhKViKh%25vq4BTyLRgA2YaxPbSrH1eIln8wsocoiZUe1M4FnIwTg9ogE6PDMLoSeWTwUtsd7HVcUfKONXGE4yjJ0lg6JOB2PSFbApeIXI5ul5ZQC32gWkzNplum7jacohKVHtc%25YhQDd9BIXGE5YrJbXqWBOIJdGwbApPARI5ui5YQC3PwOBoeKZbAJDAFI5OW39QCbVCDkzI0zWm7QqGdhKUVdf%25vGKUEyLYyPlYarJe2rHn7wpn8ouauoiMST3M4Tt8NTmCI82R0s5jCmVXxLCg9jP4HttU7RKeEPKVfv75Y5949JikhXHOiSGtKpPK&imgt=P27&pov=BE030,DZO&crop=400,250,1550,830&width=1400',
              }}
              style={{width: '100%', height: 200, backgroundColor: 'black'}}
            />
          </Row>
          <Row>
            <ImageBackground
              source={background}
              style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
              <Button
                borderedblock
                dark
                title="Go to modele"
                style={{
                  width: '100%',
                }}
                onPress={() => this.props.navigation.navigate('Modele')}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}>
                  Votre configuration démarre
                </Text>

                <Right style={{margin: 20}}>
                  <Icon name="arrow-forward" style={{color: 'white'}} />
                </Right>
              </Button>
            </ImageBackground>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
