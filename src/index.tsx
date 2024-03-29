import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";

const store = createStore(counterReducer);

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
