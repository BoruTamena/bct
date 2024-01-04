import { useTheme } from "@emotion/react";
import { AppBar, Toolbar, Typography,Tabs,Tab } from "@mui/material";
import React from "react";


export const Header=()=>{
    const theme=useTheme()
    return(
        <AppBar position="sticky" style={{background:theme. palette.primary.light}}>
            <Toolbar>
                <Typography variant="button" style={{flexGrow:1}}> LOGO</Typography>

                <Tabs
                value="one"
                // onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                >
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
                </Tabs>
            </Toolbar>

        </AppBar>
    )
}