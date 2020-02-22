import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    }).then(res => this.setState({sessionToken: res.sessionToken})).catch(err => console.log('error: ', err));
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    } // else

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id='username'
            type='text'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleUsernameChange} />
          <input
            id='password'
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange} />
          <button id='submit' type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default withAuth(LoginForm);
