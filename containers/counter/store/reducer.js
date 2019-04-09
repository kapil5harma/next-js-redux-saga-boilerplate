import { Types } from './actions';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

// ****************************** failure ******************************
const failure = (state = INITIAL_STATE, action) => {
  return { ...state, ...{ error: action.error } };
};
// _____________________________________________________________________

// ****************************** increment ******************************
const increment = (state = INITIAL_STATE, action) => {
  return { ...state, ...{ count: state.count + 1 } };
};
// _____________________________________________________________________

// ****************************** decrement ******************************
const decrement = (state = INITIAL_STATE, action) => {
  return { ...state, ...{ count: state.count - 1 } };
};
// _____________________________________________________________________

// ****************************** reset ******************************
const reset = (state = INITIAL_STATE, action) => {
  return { ...state, ...{ count: INITIAL_STATE.count } };
};
// _____________________________________________________________________

// ****************************** tick clock ******************************
const tickClock = (state = INITIAL_STATE, action) => {
  return { ...state, ...{ lastUpdate: action.payload.ts, light: !action.payload.isServer } };
};
// _____________________________________________________________________

// ****************************** load Data ******************************
const loadDataSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, ...{ lastUpdate: action.payload.ts, light: !action.payload.isServer } };
};
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FAILURE]: failure,
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
  [Types.LOAD_DATA_SUCCESS]: loadDataSuccess,
  [Types.RESET]: reset,
  [Types.TICK_CLOCK]: tickClock
};

// Create and Export Reducer
const counterReducer = createReducer(INITIAL_STATE, HANDLERS);

export default counterReducer;
