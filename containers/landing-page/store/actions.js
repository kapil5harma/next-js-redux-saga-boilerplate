import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  failure: null,
  increment: null,
  decrement: null,
  reset: null,
  loadData: null,
  loadDataSuccess: null,
  startClock: null,
  tickClock: ['payload']
});

export { Types, Creators };
