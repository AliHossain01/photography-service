import React from 'react';

const Portfolio = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />

            </div>
        </div>

    );
};

export default Portfolio;