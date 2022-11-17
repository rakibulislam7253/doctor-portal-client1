import React from 'react';

const Appointmentoption = ({ option,settreatment }) => {
    const { name, slots } = option
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body  ">
                    <h2 className="text-2xl text-center font-semibold text-primary ">{name}</h2>
                    <p>{slots.length>0 ? slots[0]:'Try another'}</p>
                    <p>{slots.length} {slots.length>1 ?'spaces':'space'} available</p>
                    <div className="card-actions justify-center">
                        <label 
                        onClick={()=>settreatment(option)}
                        htmlFor="booking-modal" 
                        className="btn btn-primary text-white">
                            Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointmentoption;