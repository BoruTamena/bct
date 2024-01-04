import { createMuiTheme } from "@mui/material";


const theme =createMuiTheme(
    {
        
    palette: {
        primary: {
            light:'#c4b1f8',
            main: '#5726E3', // Replace with your primary color
        },
        secondary: {
            main: '#ff4081', // Replace with your secondary color
        },
        },
        typography: {
        fontFamily: 'Poppins, sans-serif', // Replace with your preferred font family
        },
    }
)

export default theme