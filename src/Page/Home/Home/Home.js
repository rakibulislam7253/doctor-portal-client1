import React from 'react';
import Banner from './Banner/Banner';
import Infocards from './Infocard/Infocards';

const Home = () => {
    return (
        <div className='mx-5'>
           
            <Banner></Banner>
            <Infocards></Infocards>
        </div>
    );
};

export default Home;