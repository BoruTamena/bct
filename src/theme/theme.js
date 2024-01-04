import { createMuiTheme } from "@mui/material";


const theme =createMuiTheme(
    {
        
    palette: {
        primary: {
            light:'#c4b1f8',
            main: '#5726E3', // Replace with your primary color
        },
        secondary: {
            light:"#938eff",
            main: '#BF00FF', // Replace with your secondary color
        },
        },
        typography: {
        fontFamily: 'Poppins, sans-serif', // Replace with your preferred font family
        },
    }
)

export default theme