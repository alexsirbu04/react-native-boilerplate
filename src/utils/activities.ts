import { IActivity } from '../store/ui/activities';

export const getActivity = (activities: IActivity[], type: string | null) =>
	activities.filter(activity => activity.type === type).length > 0;

export const getActivities = (activities: IActivity[], types: Array<string | null>) =>
	activities.filter(activity => types.includes(activity.type)).length > 0;
