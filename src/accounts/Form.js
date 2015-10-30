import React from 'react';
import {
  Dialog,
  TextField
} from 'material-ui';
import {Accounts} from './Collection'

export default class AccountForm extends React.Component {
  constructor() {
    super();
    this.state = {data: {}};
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
          errorText={this.state.usernameError}
          defaultValue={this.state.data.username} /><br/>

        <TextField
          style={{width: '100%'}}
          ref='password'
          hintText="Password field"
          floatingLabelText="Password"
          type="password"
          errorText={this.state.passwordError}
          defaultValue={this.state.data.password} /><br/>

        <TextField
          style={{width: '100%'}}
          ref='token'
          hintText="Token"
          floatingLabelText="Token"
          errorText={this.state.tokenError}
          defaultValue={this.state.data.token} /><br/>
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
      id: this.state.data.id ? this.state.data.id : (Accounts.items.length+1),
      username: username,
      password: password,
      token: token,
      media: 0,
      follows: 0,
      followedBy: 0
    }

    this.state.data.id ? Accounts.update(account) : Accounts.create(account);
    this.refs.newAccount.dismiss();
  }

  _onDismiss() {
    this.setState({
      data: {},
      usernameError: null,
      passwordError: null,
      tokenError: null
    });
  }
}
