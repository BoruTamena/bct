import { Button ,Typography,Grid,Box } from '@mui/material'
import React from 'react'

export const Hero=()=>{
    return(
        < >
          <Grid container spacing={1}>
            <Grid item md={6} sm={12} lg={6}>
               <Typography variant='h2' color="primary" style={{fontWeight:"bold"}}> Unlock</Typography>
                <Typography variant='h2' align="left">
                    the Power of Technology with Expert Computer Training!
                 </Typography>
                 <Button variant='contained' color="primary" style={{width:"50%",padding:"10px",borderRadius:"50px",marginTop:"30px"}}> Get Started</Button>
            </Grid>
          </Grid>
        
        </>
    )
}