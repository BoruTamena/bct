import {   Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Container,  Grid,  Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/img/aboutimg.png'
import { Link } from 'react-router-dom'

export const Blog=()=>{
    return(
        <Container>
            <Typography variant="h5" pt={2} pb={2}style={{fontWeight:"bold"}}> Blog</Typography>
            <Card elevation={4} style={{padding:"5px"}}>
                <CardHeader
                    title="Latest Articles"
                />
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <Box>
                        <img
                        src={img1}  
                        style={{width:"100%",height:"auto"}}
                        />
                        </Box>
                       
                        <CardContent  >
                            <Typography align="justify">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non illum totam similique porro magnam dignissimos mollitia quam velit iure assumenda eveniet impedit, tempore officia, necessitatibus laborum dolorum dolores beatae.
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <Button variant="text">Read</Button>
                        </CardActionArea>
                    </Grid>

                    <Grid item md={4}>

                    <img
                        src={img1}  
                        style={{width:"100%",height:"auto"}}
                        />
                        <CardContent  >
                            <Typography align="justify">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non illum totam similique porro magnam dignissimos mollitia quam velit iure assumenda eveniet impedit, tempore officia, necessitatibus laborum dolorum dolores beatae.
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <Button variant="text">Read</Button>
                        </CardActionArea>
                    </Grid>
                    <Grid item md={4}>
                    <img
                        src={img1}  
                        style={{width:"100%",height:"auto"}}
                        />
                        <CardContent  >
                            <Typography align="justify">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non illum totam similique porro magnam dignissimos mollitia quam velit iure assumenda eveniet impedit, tempore officia, necessitatibus laborum dolorum dolores beatae.
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <Button variant="text">Read</Button>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </Card>


            <Grid container spacing={2}>
                <Grid item md={8}>
                  <Typography variant="h6"  pt={2}> Popular </Typography>

                  {/* Popular Blogs List Begin */}
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                        <img
                        src={img1}  
                        style={{width:"100%",height:"auto"}}
                        />
                    </Grid>
                    <Grid item md={8}>
                        <Typography>
                            <Link to="/blog">
                            Titile 1
                            </Link>
                           
                            </Typography>
                        <Typography variant="body1" align='justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae. Dolorem, sed quos vel nam officia maxime dolorum incidunt inventore ipsum mollitia suscipit laboriosam expedita libero pariatur, qui quas cumque.</Typography>
                    </Grid>

                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item md={4}>
                        <img
                        src={img1}  
                        style={{width:"100%",height:"auto"}}
                        />
                    </Grid>
                    <Grid item md={8}>
                        <Typography>
                            <Link to="/blog">
                            Titile 2
                            </Link>
                           
                            </Typography>
                        <Typography variant="body1" align='justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae. Dolorem, sed quos vel nam officia maxime dolorum incidunt inventore ipsum mollitia suscipit laboriosam expedita libero pariatur, qui quas cumque.</Typography>
                    </Grid>

                  </Grid>
                {/* end of Popular Blog List */}
                </Grid>
                <Grid item md={4}>
                    <Typography variant="h6" pt={2}> Recent Aritcles</Typography>

                </Grid>

            </Grid>
               
        </Container>
    )
}