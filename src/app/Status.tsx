import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '../environment/theme';

export const Status: React.FunctionComponent = () => (
	<StatusBar barStyle="light-content" backgroundColor={Colors.white} />
);
