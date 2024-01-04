import { Grid, Typography } from "@mui/material";
import React from "react";


export const About=()=>{
    return(
        <Grid container  spacing={1}>
            <Grid item md={6} sm={12}>
                
            </Grid>

            <Grid item md={6} sm={12}>
                <Typography variant="h2" color="primary">
                 we are dedicated to providing high-quality
                </Typography>
                <Typography variant="body1" align="justify">
                computer training for students in grades 8 to 12. Our expert instructors, 
                cutting-edge curriculum, and state-of-the-art facilities ensure that students not only 
                learn the essentials but also thrive in the ever-evolving world of technology. 
                Whether it's coding,software proficiency, or digital literacy, we guide our students to excel.
                Join us on the journey of unleashing the potential within every student
                </Typography>
            </Grid>

        </Grid>
    )
}