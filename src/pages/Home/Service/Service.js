import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({Service}) => {
    const {id, name,price,description,img} = Service;
    return (
        <div id='Service'>
            <img src= {img} alt="" />
           <h2>Name:-{name}</h2>
           <h2> Price:- {price}</h2>  
           <p>{description}</p>
            <Link to={`/booking/${id}`} >   <Button variant="primary mb-3">Book {name.toLowerCase()}</Button></Link>

        </div>
    );
};

export default Service;