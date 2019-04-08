import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from '../store';

interface IProps {
	children: JSX.Element | JSX.Element[];
}

export const Store: React.FunctionComponent<IProps> = ({ children }) => {
	const store = configureStore();
	const persistor = persistStore(store);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
