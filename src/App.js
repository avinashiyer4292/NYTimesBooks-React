import React, { Component } from 'react';
import * as constants from './constants/constants.js';
import { connect } from 'react-redux';
import BooksList from './components/BooksList';
import fetchJsonP from 'fetch-jsonp';
class App extends Component {
  componentDidMount(){
    fetchJsonP(`${constants.BOOKS_API_URL}`, {
            jsonpCallbackFunction: 'foobar',
          })
          .then(res => res.json())
          .then(json => console.log(`JSON IS: ${JSON.stringify(json)}`))
          .then(json => console.log(JSON.stringify(json)))
          .catch(err => {  throw new Error(err) });
  }
  render() {
    return (
        <BooksList />
    );
  }
}

export default App;
