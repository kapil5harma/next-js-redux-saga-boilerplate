import React from 'react';
import { connect } from 'react-redux';

// import { startClock, tickClock } from '../store/actions';
import { Creators } from '../store/actions';
import Page from '../components/page';

class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(Creators.tickClock({ isServer, ts: Date.now() }));
    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(Creators.startClock());
  }

  render() {
    return <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />;
  }
}

export default connect()(Other);
