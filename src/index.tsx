import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/MainContainer';
import {Provider} from "react-redux";
import store from "./state/store";

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
  document.getElementById('root')
);

