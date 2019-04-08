import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { IApplicationState } from '../../store';
import { IActivity, IError } from '../../store/ui/activities';

interface IDataProps {
	activities: IActivity[];
	errors: IError[];
}

type IProps = IDataProps;

interface IChildren {
	children: (props: IProps) => JSX.Element;
}

const Enhancer: React.FunctionComponent<IProps & IChildren> = ({ children, ...props }) =>
	children(props);

const selectActivities = createSelector(
	(state: IApplicationState) => state.ui.activities.activities,
	activities => activities
);

const selectErrors = createSelector(
	(state: IApplicationState) => state.ui.activities.errors,
	errors => errors
);

const mapStateToProps = (state: IApplicationState) => ({
	activities: selectActivities(state),
	errors: selectErrors(state)
});

export const WithActivities = connect(mapStateToProps)(Enhancer);
