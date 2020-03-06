import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
// https://developers.google.com/maps/documentation/urls/guide
const URL = "https://www.google.com/maps/dir/?api=1&destination=";
export default class MapsScreen extends Component {
	openGoogleMaps() {
		const { navigation } = this.props;
		// TODO FIXME. If 'NO-LATLNG' then there will be an error.
		let latLng = navigation.getParam('latLng', 'NO-LATLNG');
		let url = URL + latLng.latitude + "," + latLng.longitude;
		Linking.canOpenURL(url).then(function (successMessage) {
			Linking.openURL(url).catch((err) => {
				// do nothing if openURL fails
			});
		}).catch(function (reason) {
			// do nothing if cannot open url
		});
	}
	render() {
		const { navigation } = this.props;
		// TODO FIXME. If 'NO-LATLNG' then there will be an error.
		let latLng = navigation.getParam('latLng', 'NO-LATLNG');
		// latLng param is passed from MoviesScreen and used to
		// set initialRegion on MapView below.
		let name = navigation.getParam('name', 'No theater found');
		let address = navigation.getParam('address',
			'No address found');
		let phone = navigation.getParam('phone', '');
		let description = address + ", " + phone;
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
					latitude: latLng.latitude,
					longitude: latLng.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
			}}>
				<Marker key={name} coordinate={latLng}
					title={name} description={description}>
					<Callout alphaHitTest tooltip
						onPress = {this.openGoogleMaps.bind(this)}
					>
					</Callout>
				</Marker>
			</MapView>
		</View>);
	}
}
