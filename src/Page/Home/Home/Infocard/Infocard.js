import React from 'react';

const Infocard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div>
            <div className={`card p-6 md:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Infocard;