import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MoviesScreen from './MoviesScreen';

const MainNavigator = createStackNavigator({
	Movies: { screen: MoviesScreen }
});

const App = createAppContainer(MainNavigator);

export default App;