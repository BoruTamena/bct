import { useTheme } from "@emotion/react";
import { AppBar, Toolbar, Typography,Tabs,Tab, Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Header=()=>{
    const theme=useTheme()
    const [value,setvalue]=useState(1)

    const handleChange=(e,val)=>{
        setvalue(val)
    }
    return(
        <AppBar position="sticky" style={{background:"black",color:"white",boxShadow:"revert-layer"}}>
            <Toolbar>
                <Typography variant="button" style={{flexGrow:1}}> LOGO</Typography>

                <Tabs
                value={value}
                onChange={handleChange}
                textColor="color"
                indicatorColor="primary"
                 style={{textTransform:"capitalize"}}
                >
                <Tab value={1} label="Home" LinkComponent={Link} to="/"/>
                <Tab value={2} label="About"  LinkComponent={Link} to="#about"/>
                <Tab value={3} label="Blog"  LinkComponent={Link} to="/blog" />
                <Tab value={4} label="Course"   LinkComponent={Link} to="/course"/>
                </Tabs>
            </Toolbar>

        </AppBar>
    )
}