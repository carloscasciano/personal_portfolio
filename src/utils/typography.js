import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a, h2': {
      margin: "10px",
    },
    'p': {
        fontSize: "0.8em",
        marginBottom: "0.1rem"
    },
    'strong': {
        fontWeight: "600"
    },
    'li': {
        fontSize: "0.7em",
        margin: 0,
        listStyleType: "none"
    },
    'ul': {
        marginBottom: "5px"
    },
    'h4': {
        fontSize: "1.2rem",
        marginBottom: "1rem",
        marginTop: "1rem",
        textAlign: "center",
    },
    'h2': {
        fontWeight: "200"
    }
  })


const typography = new Typography(moragaTheme)

export default typography