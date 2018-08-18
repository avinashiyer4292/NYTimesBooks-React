import React, { Component } from 'react';
import BooksList from './components/BooksList';
import Header from './components/Header';
class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <BooksList  />
      </div>
    );
  }
}

export default App;
