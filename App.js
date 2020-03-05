import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MoviesScreen from './MoviesScreen';
import MapsScreen from './MapsScreen';

const MainNavigator = createStackNavigator({
	Movies: { screen: MoviesScreen },
	Maps: { screen: MapsScreen }
});

const App = createAppContainer(MainNavigator);

export default App;