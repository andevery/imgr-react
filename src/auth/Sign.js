import React from 'react';
import {
  AppCanvas,
  Paper,
  TextField,
  RaisedButton,
  FlatButton
} from 'material-ui';
import SignUp from './SignUp'
import SignIn from './SignIn'
import styles from './Sign.css'

export default class Sign extends React.Component {
  constructor() {
    super();
    this.state = {signUp: true};
  }
  render() {
    return (
      <AppCanvas style={styles.root}>
        <div style={styles.root}>
          <div style={{float: 'right', margin: 20}}>
              <RaisedButton
                label={this.state.signUp ? 'Sign In' : 'Sign Up'}
                primary={true}
                onTouchTap={() => this.setState({signUp: !this.state.signUp})} />
          </div>
          { this.state.signUp ? <SignUp /> : <SignIn /> }
        </div>
      </AppCanvas>
    );
  }
}
