import React from 'react';
import { LeftNav } from 'material-ui';

import styles from './AppLeftNav.css';

let menuItems = [
    { route: '/tasks', text: 'Tasks' },
    { route: '/accounts', text: 'Accounts' },
    { route: '/journal', text: 'Journal' }
  ];

export default class AppLeftNav extends React.Component {
  render() {
    let header = (
      <div style={styles.header} >
        Imagenar
      </div>
    );

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        style={styles.nav}
        onChange={(e, index, item) => this.context.router.pushState(null, item.route)}
        selectedIndex={menuItems.findIndex( x => x.route == this.context.location.pathname )} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }
}

AppLeftNav.contextTypes = {
  router: React.PropTypes.object,
  location: React.PropTypes.object
}
