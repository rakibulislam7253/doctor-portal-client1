import React, { useState } from 'react';
import { format } from 'date-fns';
import Appointmentoption from './Appointmentoption';
import Bookingmodal from '../Bookingmodal/Bookingmodal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Home/Sheard/loading/Loading';


const Availableappoint = ({ selected }) => {

    const [treatment, settreatment] = useState(null)
    const date = format(selected, 'PP')
    const { data: appointmentoption = [],refetch,isLoading } = useQuery({
        queryKey: ['appointmentoption',date],
        queryFn: () => fetch(`http://localhost:4000/appointmentOption?date=${date}`)
            .then(res => res.json())
    });
    if(isLoading)
    {
        return <Loading></Loading>
    }
 
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
                    treatment={treatment}>
                        refetch={refetch}
                        </Bookingmodal>}
        </section>

    );
};
//  <p>You picked .</p>

export default Availableappoint;