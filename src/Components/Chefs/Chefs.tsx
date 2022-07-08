import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./Chefs.css"
import founder from "../../images/2nd-b-i1.png"
import cofounder1 from "../../images/2nd-b-i2.png"
import cofounder2 from "../../images/2nd-b-i3.png"

const Chefs = () => {
    return (
        <div className='bg-chefs'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{textAlign:"center"}}>
                        <Typography variant="h1" component="div" >
                            Our Chef
                        </Typography>
                        <Typography variant="h5"  component="div" sx={{width:"80%",mx:"auto"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi-
                            vamus lacinia odio vitae vestibulum vestibulum.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:10}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} lg={4} sx={{textAlign:"center"}}>
                        <img src={founder} alt="Founder" />
                        <Typography variant="h3"  component="div">
                            Aiden Hunter
                        </Typography>
                        <Typography variant="subtitle1"  component="div">
                            Founder
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} sx={{textAlign:"center"}}>
                            <img src={cofounder1} alt="Co-Founder" />
                            <Typography variant="h3"  component="div">
                                Ethel Ramsey
                            </Typography>
                            <Typography variant="subtitle1"  component="div">
                                Co-Founder
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} sx={{textAlign:"center"}}>
                            <img src={cofounder2} alt="Co-Founder" />
                            <Typography variant="h3"  component="div">
                                Fannie Stewart
                            </Typography>
                            <Typography variant="subtitle1"  component="div">
                                Co-Founder
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Chefs;