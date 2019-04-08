import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { apiFactory } from '../api';
import reducer from './root';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: []
};

export const configureStore = () => {
	const persistedReducer = persistReducer(persistConfig, reducer);
	const api = apiFactory();
	const store = createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api })))
	);

	return store;
};
