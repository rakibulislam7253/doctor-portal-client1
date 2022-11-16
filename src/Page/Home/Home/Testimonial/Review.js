import React from 'react';

const Review = ({ review }) => {
    const { name, img, reviewpart, location } = review
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{reviewpart}</p>

                    <div className="flex items-center mt-6">
                        <div className="avatar mr-6">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                          <h5 className='text-lg'>{name}</h5>  
                           <p>{location}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;