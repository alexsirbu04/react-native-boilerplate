import { Action } from 'redux';

import { IUserInfo } from '../../api/auth';
export { IUserInfo } from '../../api/auth';

export interface ICredentials {
	email: string;
	password: string;
}

export interface IState {
	token: string | null;
}

export enum ActionTypes {
	REGISTER = 'auth/REGISTER',
	LOGIN = 'auth/LOGIN',
	SYNC_LOGIN = 'auth/SYNC_LOGIN'
}

export interface IRegisterAction extends Action {
	type: ActionTypes.REGISTER;
	payload: IUserInfo;
}

export interface ILoginAction extends Action {
	type: ActionTypes.LOGIN;
	payload: ICredentials;
}

export interface ISyncLoginAction extends Action {
	type: ActionTypes.SYNC_LOGIN;
	payload: {
		token: string;
	};
}

export type IAction = IRegisterAction | ILoginAction | ISyncLoginAction;
