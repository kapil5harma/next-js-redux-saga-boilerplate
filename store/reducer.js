import { combineReducers } from 'redux';

import landingPageReducer from '../containers/landing-page/store/reducer';
import counterReducer from '../containers/counter/store/reducer';

const rootReducer = combineReducers({
  landingPage: landingPageReducer,
  counter: counterReducer
});

export default rootReducer;
