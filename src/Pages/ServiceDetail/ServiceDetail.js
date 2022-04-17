import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to details {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail; 