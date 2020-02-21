import React from 'react';
import './App.css';
import Kegs from './components/Kegs'
import NewKeg from './components/NewKeg'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
  }

  handleNewKeg(newKeg) {
    let newKegList = this.state.masterKegList.slice();
    newKegList.push(newKeg);
    this.setState({masterKegList: newKegList});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Taproom</h1>
        <Switch>
          <Route exact path='/' render={()=><Kegs allKegs={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKeg onNewKeg={this.handleNewKeg} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
