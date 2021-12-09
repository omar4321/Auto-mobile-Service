import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./Services.json') 
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div id="services">
        <h2 className="text-primary mt-5">Our services</h2>
        <div className="service-container">
           {
               services.map(service => <Service key= {service.id}
                Service = {service}
                > 
                   
                </Service>)
           }
        </div>
    </div>
    );
};

export default Services;

