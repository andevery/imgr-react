import { Styles } from 'material-ui'

const Colors = Styles.Colors
const Spacing = Styles.Spacing
const Typography = Styles.Typography

const styles = {
  root: {
    backgroundColor: Colors.cyan500,
    position: 'fixed',
    height: 64,
    top: 0,
    right: 0,
    zIndex: 4,
    width: '100%',
  },
  container: {
    position: 'absolute',
    right: Spacing.desktopGutter,
    bottom: 0,
  },
  span: {
    color: Colors.white,
    fontWeight: Typography.fontWeightLight,
    left: Spacing.desktopGutter,
    top: 16,
    position: 'absolute',
    fontSize: 26,
  },
  tabs: {
    width: 420,
    bottom:0,
  },
  tab: {
    width: 120,
    height: 64,
  },
};

export default styles
