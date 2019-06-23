import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import {ThemeProvider} from '@material-ui/styles';
import theme from './theme'

import reducers from './reducers';

import Login from './components/login/login';
import Dashboard from './components/dashboard'

// import Panel from './components/panel';
// import error404 from './components/error404';
import './App.css';

let store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path={"/login"} component={Login}/>
                        <Route component={Dashboard}/>
                    </Switch>
                </Router>
            </Provider>
        </ThemeProvider>
    );
};