import { ActionCreator } from 'redux';
import uuid from 'uuid/v4';

import { IThunk } from '../types';
import { beginActivity, endActivity, setError } from '../ui/activities';
import {
	ActionTypes,
	ICredentials,
	ILoginAction,
	IRegisterAction,
	ISyncLoginAction,
	IUserInfo
} from './types';

export const registerAction: ActionCreator<IRegisterAction> = info => ({
	type: ActionTypes.REGISTER,
	payload: info
});

export const register = (info: IUserInfo): IThunk => async (dispatch, getState, context) => {
	const activityId = uuid();

	try {
		dispatch(registerAction(info));
		await dispatch(beginActivity({ type: ActionTypes.REGISTER, uuid: activityId }));
	} catch (e) {
		await dispatch(
			setError({
				type: ActionTypes.REGISTER,
				error: e.message,
				uuid: uuid()
			})
		);
	} finally {
		await dispatch(endActivity({ uuid: activityId }));
	}
};

const loginAction: ActionCreator<ILoginAction> = creds => ({
	type: ActionTypes.LOGIN,
	payload: creds
});

const syncLoginAction: ActionCreator<ISyncLoginAction> = token => ({
	type: ActionTypes.SYNC_LOGIN,
	payload: token
});

export const login = (creds: ICredentials): IThunk => async (dispatch, getState, context) => {
	const activityId = uuid();

	try {
		dispatch(loginAction());
		await dispatch(beginActivity({ type: ActionTypes.LOGIN, uuid: activityId }));
	} catch (e) {
		await dispatch(
			setError({
				type: ActionTypes.LOGIN,
				error: e.message,
				uuid: uuid()
			})
		);
	} finally {
		await dispatch(endActivity({ uuid: activityId }));
	}
};
