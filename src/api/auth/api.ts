import { buildUrl, sendRequest } from '../utils';
import { IRegisterResponse, IUserInfo } from './types';

const ENDPOINTS = {
	REGISTER: '<register-endpoint-here>'
};

export default () => ({
	register: async (user: IUserInfo): Promise<any | null> => {
		try {
			const url = buildUrl(ENDPOINTS.REGISTER);

			const response: IRegisterResponse = await sendRequest({
				url,
				method: 'POST',
				data: user
			});

			return null;
		} catch (e) {
			throw new Error(e.message);
		}
	}
});
