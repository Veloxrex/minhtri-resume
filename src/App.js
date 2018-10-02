import React, {Component, Fragment} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router'
import {createHashHistory} from "history";
import AppLayout from "./layout";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './reducer';

const history = createHashHistory()
const store = createStore(
    connectRouter(history)(rootReducer),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);
class App extends Component {
  render() {
    return (
     <Provider store={store}>
         <ConnectedRouter history={history}>
            <Fragment>
                <AppLayout/>
            </Fragment>
         </ConnectedRouter>
     </Provider>
    );
  }
}

export default App;
