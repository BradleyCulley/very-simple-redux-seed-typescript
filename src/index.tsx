import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {incrementReducer} from "./reducers/incrementReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";

const store = createStore(incrementReducer);

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
