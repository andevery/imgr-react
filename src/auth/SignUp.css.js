import { Styles } from 'material-ui'

const Spacing = Styles.Spacing;
const Colors = Styles.Colors;
const Typography = Styles.Typography;

const styles = {
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '100%',
    maxWidth: 800,
    height: 470,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  caption: {
    dislay: 'block',
    maxWidth: 500,
    margin: '0 auto',
    marginBottom: Spacing.desktopGutter,
    color: Colors.white,
    fontWeight: Typography.fontWeightLight,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 46,
    lineHeight: '1.4',
  },
  paper: {
    maxWidth: 300,
    maxHeight: 370,
    height: 320,
    padding: Spacing.desktopGutter,
    paddingTop: 0,
    boxSizing: 'border-box',
    margin: '0 auto'
  },
  input: {
    width: '100%',
    maxHeight: 70,
    height: 70,
    overflow: 'visible'
  },
  signup: {
    width: '100%',
    paddingTop: Spacing.desktopGutter
  },
  button: {
    width: '100%'
  }
};

export default styles
