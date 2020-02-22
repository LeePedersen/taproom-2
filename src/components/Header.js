import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: null
    }
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {

    const authenticated = await props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) {
      return null;
    }

    const button = this.state.authenticated ?
      <button onClick={() => {this.props.auth.logout()}}>Log out</button> :
      <button onClick={() => {this.props.auth.login()}}>Log in</button>;

    return (
      <div className='header'>
        <Link to='/'>Home</Link> | <Link to='/newkeg'>Add Keg</Link> | <Link to='/employees'>Employee View</Link> | <Link to='/employees'>Employees</Link><br/>
        {button}
      </div>
    );
  }
}

export default withAuth(Header);
