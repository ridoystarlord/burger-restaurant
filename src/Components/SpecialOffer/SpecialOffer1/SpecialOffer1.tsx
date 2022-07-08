import { Container, Grid,Typography,Button,Box } from '@mui/material';
import React from 'react';
import "./SpecialOffer1.css"
import specialburger from "../../../images/burger.png";

const SpecialOffer1 = () => {
    return (
        <div className='bg-special'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={specialburger} width="100%" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:"flex", alignItems:"center"}}>
                        <Box>
                            <Typography variant="h1" gutterBottom component="div">
                            Big Burger
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus lacinia
                            odio vitae vestibulum vestibulum.
                        </Typography>
                        <Button variant="contained" color='inherit' size='large' sx={{color:"black",mt:5}}>Order Now</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    );
};

export default SpecialOffer1;