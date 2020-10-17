import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const ServiceList = () => {
    const [service,setService]=useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch( "http://localhost:5000/singleData?email="+loggedInUser.email)
       
        
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  
    return (
        <div className="row mt-5 mx-5">
        <div className="col-md-3">
            <CustomerSidebar></CustomerSidebar>
         </div> 
         <div style={{backgroundColor:"#F4F7FC",height:'550px'}}  className="pt-5 pl-5 col-md-9">
          <div className="row">
          {
            service.map(pd=> <div className="col-md-6 ">
            <div className="m-3 border text-center p-3">
            <h3>{pd.service}</h3>
            <p>{pd.detail}</p>
            
            </div>
            </div>)
          }
          </div>
       </div> 

     </div>
    );
};

export default ServiceList;
