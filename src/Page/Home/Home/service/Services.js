import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const servicedata = [

        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
            //bgClass: ' bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            // bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
            //bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },

    ]
    return (
        <div className='mt-16 ' >
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our services</h3>
                <h2 className='text-3xl'>Service We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicedata.map(service => <Service

                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;