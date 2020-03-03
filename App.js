import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class App extends Component {
	componentDidMount() {
		return fetch('https://www.fullstackoasis.com/rnb/movies.php')
			.then((response) => response.json())
			.then((responseJson) => {
				console.warn(responseJson);
				this.setState({
					isLoading: false,
					dataSource: responseJson.movies,
				}, function () {
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return <View>
			<Picker>
			</Picker>
		</View>;
	}
}
