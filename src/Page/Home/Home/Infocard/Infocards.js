import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import Infocard from './Infocard';
const Infocards = () => {
    const carddata = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 am to 5:00 pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Open 9:00 am to 5:00 pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9:00 am to 5:00 pm everyday',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div className='grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                carddata.map(card => <Infocard
                    key={card.id}
                    card={card}
                >

                </Infocard>)
            }
        </div>
    );
};

export default Infocards;