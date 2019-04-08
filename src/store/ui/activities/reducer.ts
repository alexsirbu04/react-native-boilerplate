import initialState from './initialState';
import { ActionTypes, IAction, IState } from './types';

export default (state: IState = initialState, action: IAction): IState => {
	switch (action.type) {
		case ActionTypes.ACTIVITY: {
			return {
				...state,
				activities: action.payload.type
					? [...state.activities, action.payload]
					: state.activities.filter(activity => action.payload.uuid !== activity.uuid)
			};
		}

		case ActionTypes.ERROR: {
			return {
				...state,
				errors: action.payload.type
					? [...state.errors, action.payload]
					: state.errors.filter(error => action.payload.uuid !== error.uuid)
			};
		}

		default: {
			return state;
		}
	}
};
