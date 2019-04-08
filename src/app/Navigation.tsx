import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Placeholder } from '../screens';
import { IStackDefaultConfig } from '../types';

const defaultConfig: IStackDefaultConfig = {
	headerMode: 'none',
	defaultNavigationOptions: {
		gesturesEnabled: true
	}
};

const Root = createStackNavigator(
	{
		Placeholder: {
			screen: Placeholder
		}
	},
	defaultConfig
);

const Container = createAppContainer(Root);

export const Navigation: React.FunctionComponent = () => <Container />;
