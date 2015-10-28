import React from 'react';
import { Paper, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router';

import styles from './MenuTabs.css';

class MenuTabs extends React.Component {
  _handleTabChange(value, e, tab) {
    this.context.router.pushState(null, value)
  }

  render() {
    return (
      <div>
        <Paper
          rounded={false}
          style={styles.root} >

          <span style={styles.span} >Imagenar</span>
          <div style={styles.container}>
            <Tabs
              style={styles.tabs}
              value={this.context.location.pathname}
              onChange={this._handleTabChange.bind(this)} >

              <Tab
                value="/tasks"
                label="TASKS"
                style={styles.tab} />
              <Tab
                value="/accounts"
                label="ACCOUNTS"
                style={styles.tab} />
              <Tab
                value="/journal"
                label="JOURNAL"
                style={styles.tab} />
            </Tabs>
          </div>
        </Paper>
      </div>
    );
  }
}

MenuTabs.contextTypes = {
  router: React.PropTypes.object,
  location: React.PropTypes.object
};

export default MenuTabs
