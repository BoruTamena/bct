import { Accordion, Button, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CustomizedAccordions from './Accordion'


export const CourseDetail=()=>{

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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos alias rem, culpa ut maxime odit sunt nam modi veritatis ipsa. Ullam velit, eius harum accusamus sint excepturi corrupti deserunt magnam!
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
                            <ListItem>
                                <ListItemText>
                                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolores veritatis ullam debitis, explicabo saepe assumenda asperiores officiis dolorem quam dolor sapiente, qui mollitia enim odit ipsum id soluta aspernatur.</Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText>
                                    <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolores veritatis ullam debitis, explicabo saepe assumenda asperiores officiis dolorem quam dolor sapiente, qui mollitia enim odit ipsum id soluta aspernatur.</Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </CardContent>

                 </Card>

            </Grid>

            <Grid item md={7}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Course Objective</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis corporis cum, provident vel doloribus optio quae harum odit! Ipsa cumque optio nobis beatae magni enim dolorem commodi velit voluptate?d
                        </Typography>
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