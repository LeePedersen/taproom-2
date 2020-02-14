import React from 'react';
import './App.css';
import Kegs from './components/Kegs'
import NewKeg from './components/NewKeg'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Taproom</h1>
      <Switch>
        <Route exact path='/' component={Kegs} />
        <Route path='/newkeg' component={NewKeg} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
