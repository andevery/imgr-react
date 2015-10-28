import React from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from 'material-ui';

class ConfirmDialog extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let actions = [
      {text: 'NO'},
      {text: 'YES', onTouchTap: this.onSubmit, ref: 'submit'}
    ]
    return (
      <Dialog
        ref='confirmDialog'
        title={this.props.title}
        actions={actions}
        actionFocus='submit'
        modal={false} >
        {this.props.text}
      </Dialog>
    );
  }

  onSubmit() {
    this.props.onSubmit();
    this.refs.confirmDialog.dismiss();
  }
}

export default function confirmDialog(title, text, onSubmit) {
  let e = ReactDOM.render(
    <ConfirmDialog
      title={title}
      text={text}
      onSubmit={onSubmit} />,
    document.getElementById('helpers')
  );
  e.refs.confirmDialog.show();
}
