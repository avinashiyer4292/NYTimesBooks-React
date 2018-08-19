import React, { Component } from 'react';
import BookCategories from './components/BookCategories';
import Book from './components/Book';
import Header from './components/Header';
import { Route } from 'react-router-dom';
class App extends Component {
  
  render() {
    return (
      
        <div>
          <Header />
        
            <Route exact strict path='/' component={BookCategories}></Route>
            <Route path='/book' component={Book}></Route>
        </div>

    );
  }
}

export default App;
