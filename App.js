import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<View><Text>It is {this.state.date.toLocaleTimeString()}.</Text></View>
		);
	}
}

export default class App extends Component {
	render() {
		return (<Clock />);
	}
}
