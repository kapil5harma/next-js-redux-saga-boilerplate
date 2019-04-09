import React from 'react';
import { connect } from 'react-redux';
import { Creators } from '../store/actions';
import Page from '../components/page';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(Creators.tickClock({ isServer, ts: Date.now() }));

    if (!store.getState().placeholderData) {
      store.dispatch(Creators.loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(Creators.startClock());
  }

  render() {
    return <Page title='Index Page' linkTo='/counter' NavigateTo='Counter Page' />;
  }
}

export default connect()(Index);
