import React from 'react';
import './App.css';
import Kegs from './components/Kegs'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Taproom</h1>
      <Switch>
        <Route exact path='/' component={Kegs} />
        <Route path='/newkeg' component={NewKegForm} />
      </Switch>
    </div>
  );
}

export default App;
