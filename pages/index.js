import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators } from '../store/actions';
import Page from '../components/page';

class Index extends React.Component {
  static async getInitialProps(props) {
    const {
      ctx: { store },
      ctx: { isServer }
    } = props;

    store.dispatch(Creators.tickClock({ isServer, ts: Date.now() }));

    if (!store.getState().placeholderData) {
      store.dispatch(Creators.loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(Creators.startClock());
  }

  render() {
    return <Page title='Index Page' linkTo='/counter' NavigateTo='Counter Page' />;
  }
}

Index.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Index);
