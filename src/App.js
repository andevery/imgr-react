import React from 'react';
import { AppCanvas, Paper } from 'material-ui';
import MenuBar from './MenuBar';
import MenuTabs from './MenuTabs';
import AppLeftNav from './AppLeftNav';

import styles from './App.css';

class App extends React.Component {
  getChildContext() {
    return {
      router: this.props.history,
      location: this.props.location
    };
  }

  componentWillMount() {
    let setTabsState = () => {
      let renderTabs = !(document.body.clientWidth <= 800)
      this.setState({
        renderTabs: renderTabs
      });
    };
    setTabsState();
    window.onresize = setTabsState;
  }

  leftNavToggle() {
    this.refs.leftNav.toggle();
  }

  render() {
    return (
      <AppCanvas style={styles.root}>
        <div style={styles.root}>
        {
          this.state.renderTabs ? <MenuTabs /> :
          <MenuBar toggle={this.leftNavToggle.bind(this)} title={this.props.routes[this.props.routes.length-1].title} />
        }
        <Paper style={styles.container} zDepth={1} >
          {this.props.children}
        </Paper>
        <AppLeftNav ref="leftNav" />
        </div>
      </AppCanvas>
    );
  }
}

App.childContextTypes = {
  router: React.PropTypes.object,
  location: React.PropTypes.object,
  onResize: React.PropTypes.func
};

export default App
