import { createReducer } from 'reduxsauce';
import { Types } from './actions';

export const INITIAL_STATE = {
  someData: null
};

// ****************************** failure ******************************
const failure = (state = INITIAL_STATE, action) => ({ ...state, ...{ error: action.error } });
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FAILURE]: failure
};

// Create and Export Reducer
const landingPageReducer = createReducer(INITIAL_STATE, HANDLERS);

export default landingPageReducer;
