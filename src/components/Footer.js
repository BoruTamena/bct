import { useTheme } from "@emotion/react"
import { AppBar, Container, Grid, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material"


export const Footer=()=>{
    const theme=useTheme()
    return(
        <AppBar position="static"  style={{background:theme. palette.secondary.light,color:"white",boxShadow:"none"}}>
            <Toolbar>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item md={4}>
                            <Typography variant="h5" pt={3} pb={2}>Company</Typography>
                            <Typography variant="body1" p={1}>
                                A dynamic image or illustration featuring a classroom setting with engaged students working on computers, or a collage of technology-related images to convey a sense of learning and innovation.</Typography>
                        </Grid>
                        <Grid item md={4} >
                            <Typography variant="h5" pt={3} pb={2}> Links</Typography>
                            <List dense>
                                <ListItem >
                                    <ListItemText primary="Blog"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText  primary="Register"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText  primary="CourseList"/>
                                </ListItem>
                                
                            </List>
                        </Grid>

                        <Grid item md={4} >
                            <Typography variant="h5" pt={3}>Contact</Typography>
                            <Typography p={1} style={{lineHeight:1.9}}>Adama ,oromia,Ethiopia </Typography>
                            <Typography p={1} style={{lineHeight:1.9}}> borutamena46@gmail.com</Typography>
                            <Typography p={1} style={{lineHeight:1.9}}> +251953301736</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
            <Typography variant="body2" align="center" > &copy; copyright is reserved by bct</Typography>
            <Typography variant="body2" align="center"> Developed by Boru Tamena Yadeta</Typography>

        </AppBar>
    )
} 