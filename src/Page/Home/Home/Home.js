import React from 'react';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import Infocards from './Infocard/Infocards';
import Services from './service/Services';
import Makeappoitment from './Makeappoitment/Makeappoitment'
import Testimonial from './Testimonial/Testimonial'

const Home = () => {
    return (
        <div className='mx-5'>
           
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <DentalCare></DentalCare>
            <Makeappoitment></Makeappoitment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;