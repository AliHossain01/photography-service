import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const { serviceId } = useParams();


    return (
        <div>
            <div class="card w-50 mx-auto mt-5 text-center">
                <div class="card-header">
                    <h2>Welcome</h2>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Thanks for inviting me for the best click</h5>
                    <p class="card-text">Hope you will get a wonderful experience </p>
                    <div className='text-center'>
                        <Link to="/checkout">
                            <button className='btn btn-dark'>Confirm Booking</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

