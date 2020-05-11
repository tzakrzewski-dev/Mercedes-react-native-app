import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import image from '../../images/config.jpeg';

class Splashscreen extends Component {
  /***SplashScreem timer */
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 3000);
  }

  render() {
    return (
      <ImageBackground
        source={require('../../images/config.jpeg')}
        style={{width: '100%', flex: 1}}
      />
    );
  }
}

export default Splashscreen;
