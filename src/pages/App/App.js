import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import Home from '../../components/Home';
import Header from '../../components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/
  
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div className="app">
        <Header />
        {/* Home */}
        <Home/>
          {/* Header */}

          {/* Banner */}
            {/* Search */}

          {/* Cards */}

          {/* Footer */}

        {/* SearchPage */}
          {/* ... */}

      </div>
    );
  }
}

export default App;
