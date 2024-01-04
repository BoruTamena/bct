import { Button ,Typography,Grid,Box } from '@mui/material'
import React from 'react'

export const Hero=()=>{
    return(
        < >
          <Grid container spacing={1}>
            <Grid item md={6} sm={12} lg={6}>
               <Typography variant='h2' color="primary"> Unlock</Typography>
                <Typography variant='h2' align="left">
                    the Power of Technology with Expert Computer Training!
                 </Typography>
                 <Button variant='contained' color="primary"> Get Started</Button>
            </Grid>
          </Grid>
        
        </>
    )
}