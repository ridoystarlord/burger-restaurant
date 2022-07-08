import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='hero-banner'>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} sx={{display:"flex", alignItems:"center", height:"100vh"}}>
                        <Box>
                            <Typography variant="h1" component="div" gutterBottom sx={{color:"white"}}>
                            Get Cashback up to 50%
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" sx={{color:"white"}}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse consectetur
                            justo eu nunc consequat.
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;