import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/Authprovider';
import toast from 'react-hot-toast';
const Bookingmodal = ({ treatment, selected, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP')
    const { user } = useContext(AuthContext)
    console.log(user)
    const handelbooking = event => {
        event.preventDefault()

        const from = event.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;


        const booking = {
            AppointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,


        }
        console.log(booking)

        fetch('http://localhost:4000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
             body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>
            {
            console.log(data)
            if(data.acknowledged)
            {
                toast.success('Booking confirm')
                refetch()
            }
            
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handelbooking}>
                        <input type="text" disabled value={date} className="input input-bordered input-success w-full max-w-xs mt-4" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mt-4">

                            {
                                slots.map((slot,i) => <option value={slot} key={i} >  {slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs  mt-4" />
                        <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input input-bordered input-success w-full max-w-xs  mt-4" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-success w-full max-w-xs  mt-4" />
                        <input className=' btn btn-accent text-white w-full max-w-xs mt-12' type="submit" value="submit" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;