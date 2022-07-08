import { Box, Button, Grid,TextField,Typography } from '@mui/material';
import React from 'react';
import "./Subscriber.css"

const Subscriber = () => {
    return (
        <div className='bg-subscriber'>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Typography variant="h1" component="div" >
                        Don’t miss Our Update
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Typography variant="h5" component="div" sx={{width:"50%",mx:"auto"}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lacinia odio vitae vestibulum vestibulum.
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Box>
                        <TextField label="Your Email" variant="outlined" size='small' sx={{width:"25%",bgcolor:"white"}} />
                        <Button variant="contained" sx={{bgcolor:"#F64B3C"}}>Subscribe</Button>
                    </Box>
                </Grid>
            </Grid>
            
        </div>
    );
};

export default Subscriber;