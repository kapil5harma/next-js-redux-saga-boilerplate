import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators } from '../store/actions';

class Counter extends Component {
  increment = () => {
    const { dispatch } = this.props;
    dispatch(Creators.increment());
  };

  decrement = () => {
    const { dispatch } = this.props;
    dispatch(Creators.decrement());
  };

  reset = () => {
    const { dispatch } = this.props;
    dispatch(Creators.reset());
  };

  render() {
    const { count } = this.props;

    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button type='button' onClick={this.increment}>
          +1
        </button>
        <button type='button' onClick={this.decrement}>
          -1
        </button>
        <button type='button' onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func,
  count: PropTypes.number
};

const mapStateToProps = state => {
  // console.log('state: ', state);
  console.log('');
  return {
    count: state.counter.count
  };
};
export default connect(mapStateToProps)(Counter);
