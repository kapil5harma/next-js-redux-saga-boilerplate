/** global fetch */

import { all, call, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
// import 'isomorphic-unfetch';

import { Types } from './actions';
import { runClockSaga, loadDataSaga } from '../containers/counter/store/saga';
import { loadDataSaga1 } from '../containers/landing-page/store/saga';

es6promise.polyfill();

export function* counterSaga() {
  yield all([call(runClockSaga), takeLatest(Types.LOAD_DATA, loadDataSaga)]);
}

export function* landingPageSaga() {
  yield all([takeLatest(Types.LOAD_DATA, loadDataSaga1)]);
}
