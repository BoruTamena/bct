import { Accordion, Button, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CustomizedAccordions from './Accordion'
import { useLocation } from 'react-router-dom'
import CoursesData from '../store/courses.json'

export const CourseDetail=()=>{

    
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id');

    const filterCourses=(courses,id)=>{
       return courses.filter(item=>item.id==id)
    }

    const course=filterCourses(CoursesData.courses,id)
    console.log(course)

    return(
        <Container>  
        <Grid container spacing={1} pt={3}>
            <Grid item md={4}>
                <Card elevation={5}>
                    <CardMedia
                        src={require(`../assets/img/coursebg.png`).default}
                        style={{paddingTop:"30%"}}
                    />
                    <CardContent>
                        <Typography>
                           {course[0].description}
                        </Typography>

                        <Button variant='contained' color="primary" style={{boxShadow:"none" ,borderRadius:"20px" ,padding:"10px",margin:"10px",width:"100%"}}> Start Course</Button>
                    </CardContent>



                </Card>
                
                 <Card style={{marginTop:"5px"}} >
                    <CardHeader
                        title="CourseOutcome"
                    />
                    <CardContent>
                        <List>

                        {
                        course[0].outcomes.map((item,index)=>{
                            return(
                            <div key={index}>
                             <ListItem>
                                <ListItemText>
                                    <Typography>{item}</Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider/>
                            </div>
                           
                            )
                        })
                        }
                        
                            
                        </List>
                    </CardContent>

                 </Card>

            </Grid>

            <Grid item md={7}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Course Objective</Typography>
                        <List>
                            {course[0].objectives.map((item,index)=>{
                                return(
                                    <ListItem>
                                        <ListItemText>
                                            {item}
                                        </ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </CardContent>
                </Card>

                <Card style={{marginTop:"5px"}}>
                    <CardContent>
                        <Typography variant="h6">Course Circulum</Typography>
                        <CustomizedAccordions/>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>

        </Container>
    )
}