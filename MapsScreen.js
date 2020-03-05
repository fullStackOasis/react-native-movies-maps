import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
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
			<MapView style={[{ flex: 1 }]}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</View>);
	}
}
