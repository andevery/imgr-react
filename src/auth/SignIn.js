import React from 'react';
import {
  Paper,
  TextField,
  RaisedButton
} from 'material-ui';
import styles from './SignIn.css'

export default class SignIn extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <div>
          <TextField
            style={styles.input}
            hintText="Username"
            floatingLabelText="Username" /><br/>

          <TextField
            style={styles.input}
            hintText="Password"
            floatingLabelText="Password"
            type='password' /><br/>
        </div>
        <div style={styles.signup}>
          <RaisedButton style={styles.button} label="Sign In" secondary={true} />
        </div>
      </Paper>
    );
  }
}
