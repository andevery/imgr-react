import { Styles } from 'material-ui'

const Spacing = Styles.Spacing;
const Colors = Styles.Colors;
const Typography = Styles.Typography;

const styles = {
  paper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: 300,
    maxHeight: 230,
    margin: 'auto',
    padding: Spacing.desktopGutter,
    paddingTop: 0,
    boxSizing: 'border-box'
  },
  input: {
    width: '100%'
  },
  signup: {
    width: '100%',
    paddingTop: Spacing.desktopGutter,
    paddingBottom: Spacing.desktopGutter,
    textAlign: 'right',
  },
  button: {
  }
};

export default styles
