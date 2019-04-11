import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import { counterSaga, landingPageSaga } from './saga';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const INITIAL_STATE = {};

function configureStore(initialState = INITIAL_STATE) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(counterSaga);
  store.sagaTask = sagaMiddleware.run(landingPageSaga);

  return store;
}

export default configureStore;
