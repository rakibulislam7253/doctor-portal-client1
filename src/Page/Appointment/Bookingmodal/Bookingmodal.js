import React from 'react';
import { format } from 'date-fns';
const Bookingmodal = ({ treatment, selected }) => {
    const { name, slots } = treatment;
    const data = format(selected, 'PP')

    const handelbooking = event => {
        event.preventDefault()

        const from = event.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;


        const booking={
            AppointmentDate:data,
            treatment:name,
            patient:name,
            slot,
            email,
            phone,


        }
        console.log(booking)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handelbooking}>
                        <input type="text" disabled value={data} className="input input-bordered input-success w-full max-w-xs mt-4" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mt-4">

                            {
                                slots.map(slot => <option  >  {slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs  mt-4" />
                        <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-success w-full max-w-xs  mt-4" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs  mt-4" />
                        <input className=' btn btn-accent text-white w-full max-w-xs mt-12' type="submit" value="submit" />
                   
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;