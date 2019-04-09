import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Creators } from '../store/actions';
import counter from '../pages/counter';
// import { increment, decrement, reset } from '../store/actions';

class Counter extends Component {
  increment = () => {
    this.props.dispatch(Creators.increment());
  };

  decrement = () => {
    this.props.dispatch(Creators.decrement());
  };

  reset = () => {
    this.props.dispatch(Creators.reset());
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
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};
export default connect(mapStateToProps)(Counter);
