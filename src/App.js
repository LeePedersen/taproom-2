import React from 'react';
import './App.css';
import Kegs from './components/Kegs';
import NewKeg from './components/NewKeg';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Admin from './components/Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
    this.handleDecreasePints = this.handleDecreasePints.bind(this);
  }

  handleNewKeg(newKeg) {
    let newKegList = this.state.masterKegList.slice();
    newKegList.push(newKeg);
    this.setState({masterKegList: newKegList});
  }

  handleDecreasePints(kegId) {
    let newKegList = this.state.masterKegList.slice();
    let newKeg = newKegList.filter(keg => keg.id === kegId);
    let newPints = newKeg[0].pintsLeft - 1;
    newKeg[0].pintsLeft = newPints;
    this.setState({masterKegList: newKegList});
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <h1>Taproom</h1>
        <Switch>
          <Route exact path='/' render={(props)=><Kegs allKegs={this.state.masterKegList} onDecreasePints={this.handleDecreasePints} currentRouterPath={props.location.pathname} />} />
          <Route path='/employees' render={(props)=><Admin onDecreasePints={this.handleDecreasePints} allKegs={this.state.masterKegList} currentRouterPath={props.location.pathname} />} />
          <Route path='/newkeg' render={()=><NewKeg onNewKeg={this.handleNewKeg} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
