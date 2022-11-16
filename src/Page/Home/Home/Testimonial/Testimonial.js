import React from 'react';
import quata from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const review = [
        {
            _id: 1,
            name: "Winson Herry",
            reviewpart: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            img: people2,
            reviewpart: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California'
        },
        {
            _id: 3,
            name: "Winson Herry",
            img: people3,
            reviewpart: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: 'California'
        },
    ]
    return (
        <section className='my-16  '>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl text-primary font-bold'>Testimonial</h2>
                    <h1 className='text-3xl' >What Our Patients Says</h1>
                </div>
                <figure>
                    <img className=' w-24 lg:w-48' src={quata} alt="" srcset="" />
                </figure>

            </div>

            <div className='grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    review.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </section>
    );
};
export default Testimonial;