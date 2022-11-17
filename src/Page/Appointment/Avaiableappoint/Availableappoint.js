import React from 'react';
import { format } from 'date-fns';
const Availableappoint = ({selected,setSelected}) => {
    return (
        <div  className='text-center'>
            <p className='font-bold'>Available Appointments on {format(selected, 'PP')}</p>
        </div>
    );
};
//  <p>You picked .</p>

export default Availableappoint;