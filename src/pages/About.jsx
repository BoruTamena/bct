import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import AboutImg from '../assets/img/aboutimg.png'

export const About=()=>{
    return(
        <>
        <Grid container  spacing={3}>
            <Grid item md={6} sm={12}>
                
                <img
                    src={AboutImg}
                    style={{width:"100%",height:"auto"}}
                   
                />
            </Grid>

            <Grid item md={6} sm={12}>
                <Typography variant="h3" color="primary" style={{textTransform:"capitalize"}}>
                 we are dedicated to providing high-quality
                </Typography>
                <Typography variant="body1" align="justify" pt={3}style={{lineHeight: 1.7,textTransform:"capitalize" }}>
                computer training for students in grades 8 to 12. Our expert instructors, 
                cutting-edge curriculum, and state-of-the-art facilities ensure that students not only 
                learn the essentials but also thrive in the ever-evolving world of technology. 
                Whether it's coding,software proficiency, or digital literacy, we guide our students to excel.
                Join us on the journey of unleashing the potential within every student
                </Typography>
            </Grid>

        </Grid>

        </>
    )
}