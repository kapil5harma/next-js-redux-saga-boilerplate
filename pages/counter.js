import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { startClock, tickClock } from '../store/actions';
import { Creators } from '../store/actions';
import Page from '../components/page';

class Other extends React.Component {
  static async getInitialProps(props) {
    const {
      ctx: { store },
      ctx: { isServer }
    } = props;
    store.dispatch(Creators.tickClock({ isServer, ts: Date.now() }));
    return { isServer };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(Creators.startClock());
  }

  render() {
    return <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />;
  }
}

Other.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Other);
