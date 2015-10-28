import React from 'react';
import {
  List,
  FloatingActionButton,
  Icons,
} from 'material-ui';
import AccountItem from './_Item';
import AccountNew from './New';
import Accounts from './Collection';

const ContentAdd = Icons.ContentAdd;
const accounts = new Accounts();

class AccountsIndex extends React.Component {
  constructor() {
    super();
    this.state = {data: accounts.getAll()};
    accounts.onChange = () => this.setState({data: accounts.getAll()});
  }

  getChildContext() {
    return {
      collection: accounts
    };
  }

  render() {
    let accountNodes = this.state.data.map((acc) => {
      return (
        <AccountItem key={acc.id} data={acc} />
      );
    });

    return (
      <div>
        <List>
          {accountNodes}
        </List>
        <FloatingActionButton style={{position: 'fixed', right: 30, bottom: 30}} onTouchTap={() => this.refs.accountNew.show()}>
          <ContentAdd />
        </FloatingActionButton>
        <AccountNew ref='accountNew' />
      </div>
    );
  }
}

AccountsIndex.childContextTypes = {
  collection: React.PropTypes.object
}

export default AccountsIndex
