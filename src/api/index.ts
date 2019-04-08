import { auth } from './auth';
export { IAuth } from './types';

export const apiFactory = () => ({
	auth: () => auth()
});
export type IApiFactory = ReturnType<typeof apiFactory>;
