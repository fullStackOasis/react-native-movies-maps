import React, { Component } from 'react';
import { Picker, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
	componentDidMount() {
		return fetch('https://www.fullstackoasis.com/rnb/movies.php')
			.then((response) => response.json())
			.then((responseJson) => {
				this.handleMoviesResponse(responseJson.movies);
			})
			.catch((error) => {
				// TODO FIXME
				console.error(error);
			});
	}
	setMovieState(movies) {
		this.setState({
			isLoading: false,
			dataSource: movies,
		});
	}
	handleMoviesResponse(movies, delay) {
		if (delay && delay > 0) {
			const timer = setTimeout(function () {
				this.setMovieState(movies);
			}.bind(this), delay);
		} else {
			this.setMovieState(movies);
		}
	}
	render() {
		if (this.state && !this.state.isLoading) {
			let items = [];
			var length = this.state.dataSource.length;
			for (var i = 0; i < length; i++) {
				var item = this.state.dataSource[i];
				items.push(<Picker.Item label={item.title}
					value={item.title} key={item.id} />);
			}
			return <View>
				<Picker selectedValue={this.state.movie}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ movie: itemValue })
					}>
				{items}
				</Picker>
			</View>;
		} else {
			return (<View style={
				[ { flex: 1, justifyContent: 'center' },
				{ flexDirection: 'row',
					justifyContent: 'space-around',
					padding: 10 }
				]
			}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>);
		}
	}
}
