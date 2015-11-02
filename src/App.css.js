import { Styles } from 'material-ui'

const Spacing = Styles.Spacing

const styles = {
  root: {
    height: '100%',
    background: 'url(images/back11.jpg) no-repeat center center fixed',
    backgroundSize: 'cover'
  },
  container: {
    maxWidth: 800,
    padding: Spacing.desktopGutter,
    paddingTop: Spacing.desktopKeylineIncrement + 'px',
    margin: '0 auto',
    minHeight: '100%',
    overflow: 'hidden'
  }
};

export default styles
