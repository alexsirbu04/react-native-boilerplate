import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IApiFactory } from '../api';
import { IApplicationState } from './root';

import { IAction as IAuthActions } from './auth';

import { IAction as IActivitiesActions } from './ui/activities';

type IApplicationAction = IAuthActions | IActivitiesActions;

export type IThunk = ThunkAction<Promise<void>, IApplicationState, IContext, IApplicationAction>;
export type IThunkDispatch = ThunkDispatch<IApplicationState, IContext, IApplicationAction>;

export interface IContext {
	api: IApiFactory;
}
