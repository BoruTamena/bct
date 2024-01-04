import React from "react"
import { Hero } from "./Hero"
import heroImage from '../assets/img/herobg3.png';
import coursebg from '../assets/img/coursebg.png'
import { Container, Grid, Typography } from "@mui/material";
import { About } from "./About";
import { Courses } from "./Courses";
import { Partner } from "./Partner";
import CustomizedAccordions from "./Accordion";
import { Footer } from "../components/Footer";

// const heroImage = require('../assets/img/hero.png').default;

export const Home =()=>{

    return(
        <>
        <div style={bg} >
            <Container>
             <Hero/>
            </Container>
        </div>

        <Container>
            <section id="#about" style={{marginBottom:"60px"}}>
                <Typography variant="h4" align="center" color="white" style={{padding:"50px",fontWeight:"bold"}}> About</Typography>

                <About/>
            </section>

        
        </Container>

        <section style={coursesbg} >
            <Container>
                <Typography variant="h4" align="center" color="white" p={5} style={{fontWeight:"bold"}}> Courses</Typography>
                 
                 <Grid container spacing={1}>
                    <Grid item md={4}>
                      <Courses/>
                    </Grid>
                    <Grid item md={4}>
                      <Courses/>
                    </Grid>
                    <Grid item md={4}>
                      <Courses/>
                    </Grid>
                 </Grid>
              
            </Container>
           
        </section>

        <section>
            
             <Partner/>

        </section>
        <Container >
            <Typography variant="h4" align="center" color="white" p={5} style={{fontWeight:'bold'}} > FAQ ?</Typography>
             <CustomizedAccordions/>
        </Container>

        
        </>
    )
}


const bg={
    backgroundImage:`url(${heroImage})`,
    width:"100%",
    height:"80vh",
    color:"white",
    paddingTop:"100px"
}

const coursesbg={
    backgroundImage:`url(${coursebg })`,
    width:"100%",
    height:"80vh",
}