import * as action from './action';
import { ActionType } from 'typesafe-actions';
import { DrawsData, DrawsList } from '../api/draws';

export type DrawsAction = ActionType<typeof action>;

export type DrawsState = {
  draws: {
    loading: boolean;
    error: Error | null;
    data: DrawsList | null;
  };
};

export type DataAction = ActionType<typeof action>;

export type DataState = {
  draws: {
    loading: boolean;
    error: Error | null;
    data: DrawsData | null;
  };
};
