import { Styles } from 'material-ui'

const Spacing = Styles.Spacing
const Typography = Styles.Typography
const Colors = Styles.Colors

const styles = {
  header: {
    cursor: 'pointer',
    //.mui-font-style-headline
    fontSize: '24px',
    color: Typography.textFullWhite,
    lineHeight: Spacing.desktopKeylineIncrement + 'px',
    fontWeight: Typography.fontWeightLight,
    backgroundColor: Colors.cyan500,
    paddingLeft: Spacing.desktopGutter,
    paddingTop: '0px',
    marginBottom: '8px',
  },
  nav: {
    fontSize: Typography.fontStyleButtonFontSize,
    fontWeight: Typography.fontWeightNormal,
  }
};

export default styles
