import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class App extends Component {
	componentDidMount() {
		return fetch('https://www.fullstackoasis.com/rnb/movies.php')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					dataSource: responseJson.movies,
				}, function () {
				});
			})
			.catch((error) => {
				// TODO FIXME
				console.error(error);
			});
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
			return (<View></View>);
		}
	}
}
