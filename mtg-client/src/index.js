import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import requireAuth from './components/requireAuth'
import Background from "./components/Background";
import AlertTemplate from "react-alert-template-basic";
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import {CardList} from './components/UserCollection'
import {CardSearch} from './components/CardSearch'

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
   
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render( 
    <Provider store={store} template={AlertTemplate} {...options}>
    <BrowserRouter>
    <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Background />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
    
    <BaseLayout>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/view-all-cards" component={requireAuth(CardList)} />
            <Route path="/card-search" component={requireAuth(CardSearch)} />
        </Switch>
    </BaseLayout>
    </div>
    </div>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

