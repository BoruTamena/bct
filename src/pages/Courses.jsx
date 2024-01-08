
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import React from "react"

export const Courses=({content,title="Python"})=>{

    
    return (
        <Card elevation={4}>
            <CardMedia
              src=""
              alt=""
            />
            <CardHeader
               color="primary"
               title={title}
            />
            <CardContent>
                <Typography variant="body1">
                computer training for students in grades 8 to 12. Our expert instructors, 
                cutting-edge curriculum, and state-of-the-art facilities ensure that students not only 
                learn the essentials but also thrive in the ever-evolving world of technology. 
                </Typography>
            </CardContent>
            <CardActionArea>
                <CardActions>
                    <Button variant="contained" color="primary" style={{width:"100%",boxShadow:"none"}}> Join Class</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}