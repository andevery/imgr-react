import React from 'react';
import {
  List,
  FloatingActionButton,
  Icons,
} from 'material-ui';
import AccountItem from './_Item';
import AccountForm from './Form';
import { Accounts } from './Collection';

const ContentAdd = Icons.ContentAdd;

class AccountsIndex extends React.Component {
  constructor() {
    super();
    this.state = {data: Accounts.getAll()};
    Accounts.onChange = () => this.setState({data: Accounts.getAll()});
    this.accountForm = this.accountForm.bind(this);
  }

  static get childContextTypes() {
    return {
      accountForm: React.PropTypes.func
    };
  }

  getChildContext() {
    return {
      accountForm: this.accountForm
    };
  }

  render() {
    let accountNodes = this.state.data.map((acc) => {
      return (
        <AccountItem key={acc.id} data={acc} form={this.refs.accountNew} />
      );
    });

    return (
      <div>
        <List>
          {accountNodes}
        </List>
        <FloatingActionButton style={{position: 'fixed', right: 30, bottom: 30}} onTouchTap={() => this.accountForm().show()}>
          <ContentAdd />
        </FloatingActionButton>
        <AccountForm ref='accountNew' />
      </div>
    );
  }

  accountForm() {
    return this.refs.accountNew;
  }
}

export default AccountsIndex
