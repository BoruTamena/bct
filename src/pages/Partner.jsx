import { Button, Typography } from '@mui/material'
import React from 'react'


export const Partner=()=>{

    return(
        < div style={{display:"flex",flexFlow:"column",justifyContent:"center",alignItems:'center'}}>
        <Typography variant='h4' align="center"> Join forces with us to shape the future of education through innovative collaborations and impactful partnerships</Typography>
        
        <Button variant='contained' style={{ borderRadius:"20px",width:"30%"}}> Join Us</Button>
        </div >
    )
}