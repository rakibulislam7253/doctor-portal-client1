import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointBanner = ({selected,setSelected}) => {
   
    return (
        <div className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        //   footer={footer}

                        />
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;