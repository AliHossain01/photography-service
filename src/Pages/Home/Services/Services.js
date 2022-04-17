import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import mycapture from '../../../images/mycapture.jpg';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='d-flex justify-content-around m-5'>
            <div id='services' className='border border-dark '>

                <h2 className='text-dark text-center'>About My Capture's</h2>
                <img className='w-100' src={mycapture} alt="" />
                <h5 className='text-center text-dark'>I am a professional photographers specialize in marriage photography. Call me for capture.</h5>

            </div>

            <div id='services' className='border border-dark gx-5'>
                <h2 className='text-center text-dark'>My Capture's</h2>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;