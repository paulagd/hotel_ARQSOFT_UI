import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers';

import Test from './components/test';
// import Panel from './components/panel';
// import error404 from './components/error404';
import './App.css';

let store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Test}/>
                </Switch>
            </Router>
        </Provider>
    );
  }
}

export default App;
