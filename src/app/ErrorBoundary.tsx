/**
 * No hooks available yet for componentDidCatch and getDerivedStateFromError
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../environment/theme';

export class ErrorBoundary extends React.Component {
	public static getDerivedStateFromError() {
		return {
			error: true
		};
	}

	public state = {
		error: false
	};

	public render() {
		if (this.state.error) {
			return (
				<View style={styles.container}>
					<Text style={styles.text}>Something went wrong.</Text>
				</View>
			);
		}

		return this.props.children;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: Colors.black,
		fontSize: 20
	}
});
