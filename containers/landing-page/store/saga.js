import { put } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { Creators } from './actions';

es6promise.polyfill();

export function* loadDataSaga1() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(Creators.loadDataSuccess(data));
  } catch (err) {
    yield put(Creators.failure(err));
  }
}
