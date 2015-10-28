import React from 'react';
import {
  ListItem,
  ListDivider,
  Avatar,
  IconMenu,
  IconButton,
  MenuItem,
  Icons
} from 'material-ui';
import confirmDialog from '../helpers/ConfirmDialog';

const NavigationMoreVert = Icons.NavigationMoreVert

export default class AccountItem extends React.Component {
  constructor() {
    super();
    this.handleMenuItemTouchTap = this.handleMenuItemTouchTap.bind(this);
  }

  handleMenuItemTouchTap(e, item) {
    switch (item.props.action) {
      case 'edit':
        console.log("Edit");
        break;
      case 'delete':
      console.log(this.context)
        confirmDialog('Delete the account?', '', () => {
          this.context.collection.delete(item.props.id);
        });
        break;
    }
  }

  rightIconMenu() {
    return (
      <IconMenu iconButtonElement={
          <IconButton
            touch={true}
            tooltip="more"
            tooltipPosition="bottom-left">
            <NavigationMoreVert color='#bdbdbd' />
          </IconButton>
        }
        onItemTouchTap={ this.handleMenuItemTouchTap } >

        <MenuItem id={this.props.data.id} action='edit'>Edit</MenuItem>
        <MenuItem id={this.props.data.id} action='delete'>Delete</MenuItem>
      </IconMenu>
    );
  }

  render() {
    return (
      <div>
        <ListItem
          leftAvatar={
            <Avatar style={{left: 5}} src='images/accounts/ic_account_circle_white_48dp_2x.png' size={55} />
          }
          rightIconButton={this.rightIconMenu()}
          primaryText={this.props.data.username}
          secondaryText={
            <p>
              <span style={{color: 'rgba(0, 0, 0, 0.87)'}}>media: {this.props.data.media}, followed by: {this.props.data.followedBy}, follows: {this.props.data.follows}</span><br/>
              updated: 2 hours ago
            </p>
          }
          secondaryTextLines={2}
        />
        <ListDivider />
      </div>
    );
  }
}

AccountItem.contextTypes = {
  collection: React.PropTypes.object
}
