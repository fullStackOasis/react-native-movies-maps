import React, { Component } from 'react';
import { Picker, View, ActivityIndicator, Button }
	from 'react-native';

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
	setNearbyTheatersState(theaters) {
		this.setState({
			isLoading: false,
			nearbyTheaters: theaters,
		});
	}
	handleNearbyTheatersResponse(theaters, delay) {
		if (delay && delay > 0) {
			const timer = setTimeout(function () {
				this.setNearbyTheatersState(theaters);
			}.bind(this), delay);
		} else {
			this.setNearbyTheatersState(theaters);
		}
	}
	handleClick() {
		return fetch('https://www.fullstackoasis.com/rnb/theaters.php')
			.then((response) => response.json())
			.then((responseJson) => {
				// TODO FIXME handle timeout / delay
				this.handleNearbyTheatersResponse(responseJson);
			})
			.catch((error) => {
				// TODO FIXME replace the red screen with something informative.
				console.error(error);
			});
	}
	handleShowTheaterClick() {
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
			var theatersPicker = null;
			var goButton = null;
			if (this.state.nearbyTheaters) {
				let theaters = this.state.nearbyTheaters.map(
					function (t, i) {
						return <Picker.Item label={t.name}
							value={t.name} key={i} />;
					}
				);
				theatersPicker = <Picker selectedValue={this.state.theater}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ theater: itemValue })
					}>
					{theaters}
				</Picker>;
				goButton = <Button title="Go">
					onPress={this.handleShowTheaterClick.bind(this)}
				</Button>;
			}
			return <View>
				<Picker selectedValue={this.state.movie}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ movie: itemValue })
					}>
					{items}
				</Picker>
				<Button onPress={this.handleClick.bind(this)}
					title="Find This Movie Near Me"></Button>
				{theatersPicker}
				{goButton}
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
