import React, { useEffect } from 'react';
import Orientation from 'react-native-orientation';

import { ErrorBoundary } from './ErrorBoundary';
import { Navigation } from './Navigation';
import { Status } from './Status';
import { Store } from './Store';

export const App: React.FunctionComponent = () => {
	useEffect(() => {
		Orientation.lockToPortrait();
	}, []);

	return (
		<ErrorBoundary>
			<Store>
				<Status />
				<Navigation />
			</Store>
		</ErrorBoundary>
	);
};
