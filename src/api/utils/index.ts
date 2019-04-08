import axios, { AxiosResponse } from 'axios';

import { backend } from '../../../config.json';
import { IConfig, IRequest } from './types';

export const buildUrl = (endpoints: string | string[] = '') => {
	let url = `${backend.root}`;

	if (!Array.isArray(endpoints)) {
		return `${url}${endpoints}`;
	}

	endpoints.map(endpoint => (url = `${url}${endpoint}`));
	return url;
};

export const sendRequest = ({
	url,
	data,
	token,
	method = 'GET'
}: IRequest): Promise<AxiosResponse> => {
	const config: IConfig = {
		headers: {
			'Content-Type': 'application/json'
		},
		url,
		method,
		data
	};

	if (token) {
		config.headers.Authorization = `JWT ${token}`;
	}

	return axios.request(config);
};
