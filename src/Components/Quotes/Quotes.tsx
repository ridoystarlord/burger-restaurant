import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import "./Quotes.css"

const Quotes = () => {
    return (
        <div className='bg-quotes'>
            <Container sx={{display:"flex", alignItems:"center",height:"100vh"}}>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="h2" component="div" gutterBottom >
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus lacinia odio vitae
                            vestibulum vestibulum.
                    </Typography>
                    <Typography variant="h5" component="div" sx={{fontWeight:900}}>
                        Barry Hendersonequat.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Quotes;