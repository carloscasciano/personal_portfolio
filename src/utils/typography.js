import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
        margin: "0px",
    },
    'a:hover': {
        textDecoration: "none",
        
    },
    'h2': {
        margin: "0px",
        fontWeight: "200"
    },
    'h4': {
        fontSize: "1.8rem",
        marginBottom: "1rem",
        marginTop: "1rem",
        textAlign: "center",
    },
    'h5': {
        fontSize: "1.1rem",
        fontWeight: "600",
        marginBottom: "2px"
    },
    'p': {
        fontSize: "1rem",
        marginBottom: "0.1rem"
    },
    'strong': {
        fontWeight: "600"
    },
    'ul': {
        marginBottom: "5px"
    },
    'li': {
        fontSize: "1rem",
        margin: 0,
        listStyleType: "none"
    },
    'hr': {
        margin: "0 auto 0 auto",
        width: "80%",
        
    },
    'img': {
        height: "18px",
        margin: "5px"
    }

  })


const typography = new Typography(moragaTheme)

export default typography