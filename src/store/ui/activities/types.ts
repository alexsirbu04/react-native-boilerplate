import { Action } from 'redux';

export interface IActivity {
	uuid: string;
	type: string | null;
	payload?: string;
}

export interface IError extends IActivity {
	error: {
		message: string;
		type: string;
	} | null;
	timeout?: number;
}

export interface IState {
	activities: IActivity[];
	errors: IError[];
}

export enum ActionTypes {
	ACTIVITY = 'ui/activities/ACTIVITY',
	ERROR = 'ui/activities/ERROR'
}

export interface IActivityAction extends Action {
	type: ActionTypes.ACTIVITY;
	payload: IActivity;
}

export interface IErrorAction extends Action {
	type: ActionTypes.ERROR;
	payload: IError;
}

export type IAction = IActivityAction | IErrorAction;
