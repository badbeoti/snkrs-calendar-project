import { combineReducers } from 'redux';
import { draws, data } from './reducer';
import drawsSaga from './saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ draws, data });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([drawsSaga()]);
}
