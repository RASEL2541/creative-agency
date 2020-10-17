import React from 'react';
import { Link } from 'react-router-dom';

const ServiceData = ({service}) => {
    return (
        <div className="col-md-4 card-group">
            <Link to="/customerOrder">
           <div className="card pt-3 mb-3">
               <img className="mx-auto " style={{width:'50px',textAlign:''}} src={service.image} alt=""/>
            <h3 className='text-center pt-4' style={{fontSize:'20px'}}>{service.title}</h3>
             <p className="text-center pt-2 pb-4 px-2 text-justify">{service.dec}</p>
           </div>
           </Link>
        </div>
    );
};

export default ServiceData;