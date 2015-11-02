import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App'
import Tasks from './tasks/Tasks'
import AccountsIndex from './accounts/Index'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sign from './auth/Sign'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

function requireAuth(nextState, replaceState) {
  // replaceState({nextPathname: nextState.location.pathname}, '/sign')
}

render(
  <Router>
    <Route path='/' component={App} title='Imagenar' onEnter={requireAuth} >
      <Route path='tasks' component={Tasks} title='Tasks' />
      <Route path='accounts' component={AccountsIndex} title='Accounts' />
    </Route>
    <Route path='/sign' component={Sign} title='Sign' />
  </Router>,
  document.getElementById('app')
);