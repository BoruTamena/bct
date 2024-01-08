import React from 'react'
import { Container, Divider, Typography } from "@mui/material"
import { useLocation } from 'react-router-dom';
import blogs from '../store/blog.json'


export const BlogDetail=()=>{

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id');

    const filterblog=(blogs,id)=>{
        return blogs.filter(item=>item.id==id)
     }
 
     const blog=filterblog(blogs.blog,id)
   
    return(
       <>
       {blog.map((item,index)=> 
        <Container key={item.id}> 
            <Typography variant="h3" color="primary" pt={5}  pl={5} pr={5}pb={2}>{item.title}</Typography>
             <Typography pl={6} pb={5}>author:{item.author}, date:{item.date} </Typography>
            <Divider p={5}/>

            <Typography style={textstyle} variant="body1" align="justify" p={5} color="black">
                {item.content}
             </Typography>
        </Container>)}
       </>
    )
}


const textstyle={
    lineHeight:1.9
}