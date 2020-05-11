import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './assets/components/App/Home/Home';
import Modele from './assets/components/App/Modele/Modele';

import Splashscreen from './assets/components/Loading/Splashscreen';
import ClasseA from './assets/components/App/Modele/ClasseA/ClasseA';
import ClasseAtechnical from './assets/components/App/Modele/ClasseA/ClasseAtechnical';

/**
 * Switch navigator
 * 1er niveau
 */
const App = createAppContainer(
  createSwitchNavigator(
    {
      App: Home,
      Loading: Splashscreen,
      Modele: Modele,
      ClasseA: ClasseA,
      ClasseAtechnical: ClasseAtechnical,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

export default App;
