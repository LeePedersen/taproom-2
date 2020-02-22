import React from 'react';
import './App.css';
import Kegs from './components/Kegs';
import NewKeg from './components/NewKeg';
import Header from './components/Header';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Admin from './components/Admin';
import Login from './components/user/Login';
import Protected from './components/user/Protected';
import UserHome from './components/user/UserHome';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

function onAuthRequired({history}) {
  console.log(history);
  history.push('/login');
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
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

          // <Router>
          //   <Security issuer='https://dev-105215.okta.com/oauth2/default' clientId='0oa2gpicmN89OJazq4x6' redirectUri={window.location.origin + '/implicit/callback'} onAuthRequired={onAuthRequired} pkce={true} >
          //     <Route path='/userhome' exact={true} component={UserHome} />
          //     <Route path='/login' render={() => <Login baseUrl='https://dev-105215.okta.com/oauth2/default' />} />
          //     <SecureRoute path='/protected' component={Protected} />
          //   </Security>
          // </Router>

        </Switch>
      </div>
    );
  }
}

export default App;
