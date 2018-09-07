import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render () {
        return (
            <div>Hello</div>
        )
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route exact path = "/" component = { App } />
            <Route path = "/hello" component = { Hello } />
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));