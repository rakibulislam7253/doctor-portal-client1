import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Appointmentoption from './Appointmentoption';
import Bookingmodal from '../Bookingmodal/Bookingmodal';


const Availableappoint = ({ selected, setSelected }) => {
    const [appointmentoption, setappointmentoption] = useState([])
    const [treatment, settreatment] = useState(null)
    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
            .then(data => setappointmentoption(data))
    }, [])
    return (
        <section className='text-center'>
            <p className='font-bold'>Available Appointments on {format(selected, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentoption.map(option => <Appointmentoption
                        key={option._id}
                        option={option}
                        settreatment={settreatment}
                    >

                    </Appointmentoption>)
                }
            </div>
            {treatment &&
                <Bookingmodal
                    selected={selected}
                    treatment={treatment}></Bookingmodal>}
        </section>

    );
};
//  <p>You picked .</p>

export default Availableappoint;