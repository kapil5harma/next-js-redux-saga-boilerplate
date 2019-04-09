import { delay, put, take } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { Types, Creators } from './actions';

es6promise.polyfill();

export function* runClockSaga() {
  yield take(Types.START_CLOCK);
  while (true) {
    yield put(Creators.tickClock({ isServer: false, ts: Date.now() }));
    yield delay(1000);
  }
}

export function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(Creators.loadDataSuccess(data));
  } catch (err) {
    yield put(Creators.failure(err));
  }
}
