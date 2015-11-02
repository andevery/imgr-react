import React from 'react';
import {
  Paper,
  TextField,
  RaisedButton
} from 'material-ui';
import styles from './SignUp.css'

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.caption}>Rocking your instagram with Imagenar.inᵝ</h1>
        <Paper style={styles.paper}>
          <div style={{height: 235}}>
            <TextField
              ref='username'
              style={styles.input}
              hintText="Pick a username"
              floatingLabelText="Username"
              errorText={this.state.usernameError} /><br/>

            <TextField
              ref='email'
              style={styles.input}
              hintText="Your email"
              floatingLabelText="Email"
              errorText={this.state.emailError} /><br/>

            <TextField
              ref='password'
              style={styles.input}
              hintText="Password"
              floatingLabelText="Password"
              type='password'
              errorText={this.state.passwordError} /><br/>
          </div>
          <div style={styles.signup}>
            <RaisedButton
              style={styles.button}
              label="Sign up for beta"
              secondary={true}
              onTouchTap={() => this._onSignUp()} />
          </div>
        </Paper>
      </div>
    );
  }

  _onSignUp() {
    this.setState({
      usernameError: null, emailError: null, passwordError: null
    });
    let username = this.refs.username.getValue();
    if (username.length == 0) {
      this.setState({usernameError: 'Username is required'});
      return;
    } else if (username.length < 3) {
      this.setState({usernameError: 'Username is too short (minimum is 3 characters)'});
      return;
    }

    let email = this.refs.email.getValue();
    if (email.length == 0) {
      this.setState({emailError: 'Email is required'});
      return;
    }

    let password = this.refs.password.getValue();
    if (password.length == 0) {
      this.setState({passwordError: 'Password is required'});
      return;
    } else if (password.length < 6) {
      this.setState({passwordError: 'Password is too short (minimum is 6 characters)'});
    }
  }
}
