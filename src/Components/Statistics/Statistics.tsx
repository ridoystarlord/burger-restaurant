import { Container, Grid,Box,Typography } from '@mui/material';
import React from 'react';
import "./Statistics.css"

const Statistics = () => {
    return (
        <div className='bg-statistics'>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} sx={{textAlign:"center"}}>
                        <Typography variant="h1" component="div" >
                            Statistics
                        </Typography>
                        <Typography variant="h5"  component="div" sx={{width:"80%",mx:"auto"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi-
                            vamus lacinia odio vitae vestibulum vestibulum.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:5}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{textAlign:"center"}}>
                                    <Typography variant="h1" component="div">
                                    7K
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    CUSTOMER
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{textAlign:"center"}}>
                                    <Typography variant="h1" component="div">
                                    109
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    OUTLATES
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{textAlign:"center"}}>
                                    <Typography variant="h1" component="div">
                                    35
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    COUNTRY
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Statistics;