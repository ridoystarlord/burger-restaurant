import { Container, Grid,Card,CardContent,Typography,CardActions,Button} from '@mui/material';
import React from 'react';
import "./Packages.css"
import burgericon from "../../images/buger-icon.png"

const Packages = () => {
    return (
        <div className='bg-packages'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{textAlign:"center"}}>
                        <Typography variant="h1" component="div" >
                            Popular Package
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt:10}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                        <Card sx={{color:"#F64B3C"}}>
                            <CardContent sx={{textAlign:"center"}}>
                                <Typography gutterBottom variant="h3" component="div">
                                Package 1
                                </Typography>
                                <img src={burgericon} alt="Burger" />
                                <Typography variant="h5" sx={{mt:2}}>
                                $ 10.00
                                </Typography>
                                <Typography variant="body2" sx={{mt:2}}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:"center"}}>
                                <Button size="small" variant='contained' sx={{bgcolor:"#F64B3C"}}>Order Now</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{color:"#F64B3C"}}>
                            <CardContent sx={{textAlign:"center"}}>
                                <Typography gutterBottom variant="h3" component="div">
                                Package 2
                                </Typography>
                                <img src={burgericon} alt="Burger" />
                                <Typography variant="h5" sx={{mt:2}}>
                                $ 20.00
                                </Typography>
                                <Typography variant="body2" sx={{mt:2}}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:"center"}}>
                                <Button size="small" variant='contained' sx={{bgcolor:"#F64B3C"}}>Order Now</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{color:"#F64B3C"}}>
                            <CardContent sx={{textAlign:"center"}}>
                                <Typography gutterBottom variant="h3" component="div">
                                Package 3
                                </Typography>
                                <img src={burgericon} alt="Burger" />
                                <Typography variant="h5" sx={{mt:2}}>
                                $ 30.00
                                </Typography>
                                <Typography variant="body2" sx={{mt:2}}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:"center"}}>
                                <Button size="small" variant='contained' sx={{bgcolor:"#F64B3C"}}>Order Now</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Container>
            
        </div>
    );
};

export default Packages;