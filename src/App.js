import React, { Component } from 'react';
import BookCategories from './components/BookCategories';
import Header from './components/Header';
class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <BookCategories  />
      </div>
    );
  }
}

export default App;
