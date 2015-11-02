import React from 'react';
import {
  List,
  ListItem,
  FontIcon,
  ListDivider,
  Tabs,
  Tab,
  FloatingActionButton,
  Icons,
  RaisedButton,
  Dialog
} from 'material-ui';

import styles from './Tasks.css';

const ContentAdd = Icons.ContentAdd;

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabItemContainerStyle={styles.tabs}>
          <Tab label="ACTIVE" style={styles.tab}>
            <List>
              <ListItem
                leftAvatar={<FontIcon style={styles.icon} className="material-icons">collections</FontIcon>}
                primaryText='FOLLOWS & LIKES @andy_odds'
                secondaryText={
                  <p>
                    <span>tags, waiting, followed: 356, liked: 765</span><br/>
                  </p>
                }
                secondaryTextLines={1}
              />
              <ListDivider />
              <ListItem
                leftAvatar={<FontIcon style={styles.icon} className="material-icons">people_outline</FontIcon>}
                primaryText='UNFOLLOWING @andy_odds'
                secondaryText={
                  <p>
                    <span>waiting, unfollowed: 278</span><br/>
                  </p>
                }
                secondaryTextLines={1}
              />
              <ListDivider />
              <ListItem
                leftAvatar={<FontIcon style={styles.icon} className="material-icons">place</FontIcon>}
                primaryText='FOLLOWS & LIKES @andy_odds'
                secondaryText={
                  <p>
                    <span>geographies, waiting, followed: 356, liked: 765</span><br/>
                  </p>
                }
                secondaryTextLines={1}
              />
              <ListDivider />
            </List>
          </Tab>
          <Tab label='FINISHED'  style={styles.tab}>
            <List>
              <ListItem
                leftAvatar={<FontIcon style={styles.icon} className="material-icons">collections</FontIcon>}
                primaryText='FOLLOWS & LIKES @andy_odds'
                secondaryText={
                  <p>
                    <span>tags, waiting, followed: 356, liked: 765</span><br/>
                  </p>
                }
                secondaryTextLines={1}
              />
              <ListDivider />
              <ListItem
                leftAvatar={<FontIcon style={styles.icon} className="material-icons">people_outline</FontIcon>}
                primaryText='UNFOLLOWING @andy_odds'
                secondaryText={
                  <p>
                    <span>waiting, unfollowed: 278</span><br/>
                  </p>
                }
                secondaryTextLines={1}
              />
              <ListDivider />
            </List>
          </Tab>
        </Tabs>
        <div style={{position: 'fixed', bottom: 30, width: '100%', textAlign: 'right', boxSizing: 'border-box', maxWidth: 800, paddingRight: 60}}>
          <FloatingActionButton onTouchTap={() => this.refs.newTaskDialog.show()}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Dialog
          contentStyle={{textAlign: 'center', width: 240}}
          ref='newTaskDialog'
          actions={[{text: 'Cancel'}]}
          modal={false} >
            <RaisedButton style={{minWidth: 170, margin: 10}} label="Follow & Likes"
                          secondary={true} linkButton={true} href="#/tasks/new/follow-and-likes" />
            <RaisedButton style={{minWidth: 170, margin: 10}} label="Unfollowing"
                          secondary={true} linkButton={true} href="#/tasks/new/unfollowing" />
        </Dialog>
      </div>
    );
  }
}

Tasks.contextTypes = {
  router: React.PropTypes.object,
  location: React.PropTypes.object
};

export default Tasks;
