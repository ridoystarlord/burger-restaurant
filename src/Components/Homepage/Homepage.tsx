import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Footer from '../Footer/Footer';
import Packages from '../Packages/Packages';
import Quotes from '../Quotes/Quotes';
import SpecialOffer1 from '../SpecialOffer/SpecialOffer1/SpecialOffer1';
import SpecialOffer2 from '../SpecialOffer/SpecialOffer2/SpecialOffer2';
import Statistics from '../Statistics/Statistics';
import Subscriber from '../Subscriber/Subscriber';

function Homepage() {
    return (
        <>
            <Banner />
            <Chefs />
            <SpecialOffer1 />
            <SpecialOffer2 />
            <Statistics />
            <Packages />
            <Quotes />
            <Subscriber />
            <Footer />
        </>
    );
}

export default Homepage;