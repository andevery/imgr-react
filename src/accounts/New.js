import React from 'react';
import {
  Dialog,
  TextField
} from 'material-ui';
import {Accounts} from './Collection'

export default class AccountNew extends React.Component {
  constructor() {
    super();
    this.state = {};
    this._onSubmit = this._onSubmit.bind(this);
  }

  render() {
    let actions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onSubmit, ref: 'submit' }
    ]

    return (
      <Dialog
        contentStyle={{maxWidth: 300}}
        title='New account'
        ref='newAccount'
        actions={actions}
        actionFocus='submit'
        modal={true}
        onDismiss={() => this._onDismiss()} >

        <TextField
          style={{width: '100%'}}
          ref='username'
          hintText="Instagram account username"
          floatingLabelText="Username"
          errorText={this.state.usernameError} /><br/>

        <TextField
          style={{width: '100%'}}
          ref='password'
          hintText="Password field"
          floatingLabelText="Password"
          type="password"
          errorText={this.state.passwordError} /><br/>

        <TextField
          style={{width: '100%'}}
          ref='token'
          hintText="Token"
          floatingLabelText="Token"
          errorText={this.state.tokenError} /><br/>
      </Dialog>
    );
  }

  show() {
    this.refs.newAccount.show();
  }

  _onSubmit() {
    let username = this.refs.username.getValue();
    if (username == '') {
      this.setState({
        usernameError: 'Username is required.',
      });
      return;
    }

    let password = this.refs.password.getValue();
    if (password == '') {
      this.setState({
        passwordError: 'Password is required.',
      });
      return;
    }

    let token = this.refs.token.getValue();
    if (token == '') {
      this.setState({
        tokenError: 'Token is required.',
      });
      return;
    }

    let account = {
      id: (Accounts.items.length+1),
      username: username,
      password: password,
      token: token,
      media: 0,
      follows: 0,
      followedBy: 0
    }

    Accounts.create(account)
    this.refs.newAccount.dismiss();
  }

  _onDismiss() {
    this.setState({
      usernameError: null,
      passwordError: null,
      tokenError: null
    });
  }
}
