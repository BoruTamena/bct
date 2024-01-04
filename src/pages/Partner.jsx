import { Button, Typography } from '@mui/material'
import React from 'react'


export const Partner=()=>{

    return(
        < div style={parstyle}>
         <Typography variant='h4' align="center" color="white" p={3} style={{fontWeight:'bold'}}>Partnership</Typography>
        <Typography variant='h5' align="center"  color="white" p={2}> Join forces with us to shape the future of education through innovative collaborations and impactful partnerships</Typography>
        <Button variant='contained' style={{ borderRadius:"20px",width:"30%" ,marginBottom:"50px"}} > Join Us</Button>
        </div >
    )
}

const parstyle={
    background:"#35B7AF",
    display:"flex",
    flexFlow:"column",
    justifyContent:"center",
    alignItems:'center'

}