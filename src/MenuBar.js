import React from 'react';
import { AppBar } from 'material-ui';

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          style={{position: 'absolute', top: 0}}
          onLeftIconButtonTouchTap={this.props.toggle}
        />
      </div>
    );
  }
}

export default MenuBar
