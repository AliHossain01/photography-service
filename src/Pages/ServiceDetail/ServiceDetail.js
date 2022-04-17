import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services);
    const { serviceId } = useParams();

    // const { rest } = services.filter(service => service.id !== serviceId);
    return (
        <div>
            <h2>Welcome to details {serviceId}</h2>
            {/* <h2>Name {rest.name}</h2> */}
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail; 