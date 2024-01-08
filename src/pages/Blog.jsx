import {   Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Container,  Grid,  List,  Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/img/aboutimg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BlogList from '../store/blog.json'

export const Blog=()=>{

    const {blog,loading,error}=BlogList
    const latest=blog.slice(0,3)
    const nav=useNavigate()
    const popular=blog.slice(0,3)
    return(
        <Container>
            <Typography variant="h5" pt={2} pb={2}style={{fontWeight:"bold"}}> Blog</Typography>
            <Card elevation={4} style={{padding:"5px"}}>
                <CardHeader
                    title="Latest Articles"
                />
                <Grid container spacing={1}>
                {
                    latest.map((item,ind)=>{
                        return(
                      <Grid item md={4}>
                        <Box>
                        <img
                        src={img1}  
                        style={{width:"100%",height:"auto"}}
                        />
                        </Box>
                        <CardHeader 
                        title={item.title}
                        subheader={`${item.author},${item.date}`}
                        component={Link} to={`/blogdetail?id=${item.id}`}
                        />
                        <CardContent  >
                            <Typography align="justify">
                               {item.content.substring(0,100)}...
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <Button variant="text" 
                             onClick={()=>nav(`/blogdetail?id=${item.id}`)}
                            >Read</Button>
                        </CardActionArea>
                       </Grid>
                     )
                    })
                }
                </Grid>
            </Card>


            <Grid container spacing={2}>
                <Grid item md={8}>
                  <Typography variant="h6"  pt={2}> Popular </Typography>

                  {/* Popular Blogs List Begin */}
                 
                    {popular.map((item,index)=>{
                        return(
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <img
                                src={img1}  
                                style={{width:"100%",height:"auto"}}
                                />
                            </Grid>
                            <Grid item md={8}>
                                <Typography component={Link} to={`/blogdetail?id=${item.id}`} >{item.title}</Typography>     
                                <Typography color="black" variant="body1" align='justify'>{ item.content.substring(0,250)}...</Typography>
                            </Grid>
        
                          </Grid>
                        )
                    })}
                
                {/* end of Popular Blog List */}
                </Grid>
                <Grid item md={4}>
                    <Typography variant="h6" pt={2}> Recent Aritcles</Typography>
                    <List>
                        
                    </List>

                </Grid>

            </Grid>
               
        </Container>
    )
}