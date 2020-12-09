import { dataAsync, drawsAsync } from './action';
import { getDrawsList, DrawsList, getDrawsData, DrawsData } from '../api/draws';
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

function* getDrawsListSaga(action: ReturnType<typeof drawsAsync.request>) {
  try {
    const drawsList: DrawsList = yield call(getDrawsList);
    yield put(drawsAsync.success(drawsList));
  } catch (error) {
    yield put(drawsAsync.failure(error));
  }
}

function* getDrawsDataSaga(action: ReturnType<typeof dataAsync.request>) {
  try {
    const drawsList: DrawsData = yield call(getDrawsData, action.payload);
    yield put(drawsAsync.success(drawsList));
  } catch (error) {
    yield put(drawsAsync.failure(error));
  }
}

function* watchSaga() {
  yield takeEvery(drawsAsync.request, getDrawsListSaga);
  yield takeEvery(dataAsync.request, getDrawsDataSaga);
}

export default function* drawsSaga() {
  yield all([fork(watchSaga)]);
}
