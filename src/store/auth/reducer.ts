import initialState from './initialState';
import { ActionTypes, IAction, IState } from './types';

export default (state: IState = initialState, action: IAction): IState => {
	switch (action.type) {
		case ActionTypes.REGISTER: {
			return state;
		}

		case ActionTypes.LOGIN: {
			return state;
		}

		case ActionTypes.SYNC_LOGIN: {
			const { token } = action.payload;

			return {
				...state,
				token
			};
		}

		default: {
			return state;
		}
	}
};
