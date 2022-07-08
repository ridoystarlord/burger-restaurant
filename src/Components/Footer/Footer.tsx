import { Container, Grid,Typography } from '@mui/material';
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='bg-footer'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom component="div">
                            Title Here
                        </Typography>
                        <Typography variant="body1" gutterBottom component="div">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Aliquam at dignissim nunc,
                            id maximus ex. Etiam nec dignissim elit, at
                            dignissim enim.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h4" gutterBottom component="div">
                            About
                        </Typography>
                        <p>History</p>
                        <p>Our Team</p>
                        <p>Brand Guidelines</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h4" gutterBottom component="div">
                            Services
                        </Typography>
                        <p>How to Order</p>
                        <p>Our Product</p>
                        <p>Order Status</p>
                        <p>Promo</p>
                        <p>Payment Method</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h4" gutterBottom component="div">
                            Other
                        </Typography>
                        <p>Contact Us</p>
                        <p>Help</p>
                        <p>Privacy</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;