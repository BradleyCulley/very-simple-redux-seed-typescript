import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Action} from "redux";

interface CounterProps {
    count: number;
    onClick: () => void;
}

const Counter = (props: CounterProps) => (
  <div>
    <div>Current count: {props.count}</div>
    <button onClick={props.onClick}>Increment</button>
  </div>
);

interface StoreState {
    count: number
}

function mapStateToProps(state: StoreState) {
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        onClick: () => dispatch({
            type: 'INCREMENT'
        })
    };
}

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
