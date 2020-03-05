import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MapsScreen extends Component {
	render() {
		return (<View style={
			[{ flex: 1, justifyContent: 'center' },
			{
				flexDirection: 'row',
				justifyContent: 'space-around',
				padding: 10
			}]
		}>
			<Text>A map goes here</Text>
		</View>);
	}
}
