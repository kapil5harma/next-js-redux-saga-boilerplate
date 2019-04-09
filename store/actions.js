import { Types as counterActionTypes, Creators as counterActionCreators } from '../containers/counter/store/actions';
import {
  Types as landingPageActionTypes,
  Creators as landingPageActionCreators
} from '../containers/landing-page/store/actions';

const Types = {
  ...counterActionTypes,
  ...landingPageActionTypes
};

const Creators = {
  ...counterActionCreators,
  ...landingPageActionCreators
};

export { Types, Creators };

// console.log('Types, Creators: ', Types, Creators);
