import { combineReducers } from 'redux';

import { IState as IAuth, reducer as auth } from './auth';

import { IState as IActivities, reducer as activities } from './ui/activities';

export interface IApplicationState {
	auth: IAuth;
	ui: {
		activities: IActivities;
	};
}

export default combineReducers<IApplicationState>({
	auth,
	ui: combineReducers({
		activities
	})
});
