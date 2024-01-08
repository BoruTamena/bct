import { useTheme } from "@emotion/react";
import { ArrowDownward } from "@mui/icons-material";
import { AppBar, Toolbar, Typography,Tabs,Tab, Container,Menu, MenuItem,Button, Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popper from '@mui/material/Popper';
import { Logo } from "./Logo";
import CourseData from '../store/courses.json'

export const Header=()=>{
    const theme=useTheme()
    const nav=useNavigate()
    const [value,setvalue]=useState(1)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const id = open ? 'simple-popper' : undefined;

    const {courses, loading, error } = CourseData
    console.log(courses)
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleChange=(e,val)=>{
        setvalue(val)
    }

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error:  {error}</p>;
      }

   
    return(
        <AppBar position="sticky" style={{background:"black",color:"white",boxShadow:"none"}}>
            <Toolbar p={3}>

                <Logo/>
                <Tabs
                value={value}
                onChange={handleChange}
                textColor="color"
                indicatorColor="primary"
                 style={{textTransform:"capitalize"}}
                >
                <Tab style={{textTransform:"capitalize"}} value={1} label="Home" LinkComponent={Link} to="/"/>
                <Tab  style={{textTransform:"capitalize"}} value={2} label="About"  LinkComponent={Link} to="#about"/>
                <Tab  style={{textTransform:"capitalize"}} value={3} label="Blog"  LinkComponent={Link} to="/blog" />
                {/* <Tab  style={{textTransform:"capitalize"}} value={4} label="Course"   LinkComponent={Link} to="/course"/> */}
                </Tabs>
             
             

                <div>
                < Button variant="contained" aria-describedby={id} type="button" onClick={handleClick} style={{textTransform:"capitalize"}}>
                    Courses
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{ border: 0, p: 5, m:1, bgcolor: 'background.paper' }}>
                    <Grid container spacing ={2}>
                        <Grid item md={4} >
                            <Typography style={{fontWeight:"bold" }}>Programing Language</Typography>
                            <List dense={true}>
                               { 
                                courses.map((item,index)=>{
                                    return(
                                     <ListItem button key={index}
                                      component={Link}
                                       to={`/course?id=${item.id}` }
                                       onClick={handleClick} 
                                       >
                                        <ListItemText >{item.name}</ListItemText>
                                    </ListItem>
                                    )
                                })  
                                }

                            </List>
                        </Grid>
                        
                    <Grid item md={4}>
                        <Typography style={{fontWeight:"bold"}}>Web Development</Typography>
                        <List dense={true}>
                                <ListItem button>
                                    <ListItemText> HTML and CSS Basics </ListItemText>
                                </ListItem>
                                <ListItem button >
                                    <ListItemText>FrontEnd Development </ListItemText>
                                </ListItem>

                                <ListItem button>
                                    <ListItemText>Full-Stack Web Development </ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText> DataBases</ListItemText>
                                </ListItem>
                                

                            </List>
                            
                        </Grid>
                        <Grid item md={4}>
                        <Typography style={{fontWeight:"bold"}}>Graphics Design</Typography>
                            <ListItem button>
                                <ListItemText> Adobe Photoshop  </ListItemText>
                            </ListItem>

                            <ListItem button>
                                <ListItemText>Adobe Premiere Pro / Vedio Edting </ListItemText>
                            </ListItem>

                        </Grid>
                        
                        
                    </Grid>
                    </Box>
                </Popper>
    </div>


                
            </Toolbar>

        </AppBar>
    )
}