import React from 'react';

const Card = ({user}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5>{user.name}</h5>
                <h6 className="card-color">{user.company.name}</h6>
                <p>{user.company.catchPhrase}</p>
            </div>
        </div>
    );
};

export default Card;