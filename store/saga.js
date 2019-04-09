/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

// import { actionTypes, failure, loadDataSuccess, tickClock } from './actions';
import { Types, Creators } from './actions';
import { runClockSaga, loadDataSaga } from '../containers/counter/store/saga';
import { loadDataSaga1 } from '../containers/landing-page/store/saga';

es6promise.polyfill();

export function* counterSaga() {
  yield all([call(runClockSaga), takeLatest(Types.LOAD_DATA, loadDataSaga)]);
}

export function* landingPageSaga() {
  yield all([takeLatest(Types.LOAD_DATA, loadDataSaga1)]);
}
