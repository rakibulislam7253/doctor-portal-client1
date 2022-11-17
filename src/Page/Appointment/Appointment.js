import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import Availableappoint from './Avaiableappoint/Availableappoint';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>

            <AppointBanner
                selected={selected}
                setSelected={setSelected}></AppointBanner>


            <Availableappoint
                selected={selected}
                setSelected={setSelected}></Availableappoint>

        </div>
    );
};

export default Appointment;