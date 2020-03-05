import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
export default class MapsScreen extends Component {
	render() {
		const { navigation } = this.props;
		// TODO FIXME. If 'NO-LATLNG' then there will be an error.
		let latLng = navigation.getParam('latLng', 'NO-LATLNG');
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
					latitude: latLng.latitude, // parameter passed from MoviesScreen
					longitude: latLng.longitude, // parameter passed from MoviesScreen
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			/>
		</View>);
	}
}
