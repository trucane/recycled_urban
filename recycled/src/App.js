import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Businesses, Home} from './components';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/businesses' component={Businesses}/>
          <Route path='/' component={Home}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
