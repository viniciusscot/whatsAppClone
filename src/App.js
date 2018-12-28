import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "@firebase/app";
import ReduxThunk from "redux-thunk";

import Routes from "./Routes";
import reducers from "./reducers";

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBuAIHHT5Hs9nEgojU4MnnodlLKsRoF2FM",
      authDomain: "whatsapp-clone-ee02c.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-ee02c.firebaseio.com",
      projectId: "whatsapp-clone-ee02c",
      storageBucket: "whatsapp-clone-ee02c.appspot.com",
      messagingSenderId: "554013927645"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
