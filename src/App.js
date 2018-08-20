import React, { Component } from 'react';
<<<<<<< HEAD
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

=======
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
>>>>>>> create-react-app setup
    );
  }
}

export default App;
