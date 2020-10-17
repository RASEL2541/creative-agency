import React, { createContext, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi,faShoppingCart,faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CustomerSidebar.css'
import logos from '../../images/logos/logo.png'
import { UserContext } from '../../App';
const CustomerSidebar = () => {
    const [admin,setAdmin]=useState({})
    const [loggedInUser,setloggedInUser]=useContext(UserContext)
  
    useEffect(() => {
        fetch( "http://localhost:5000/adminEmail?email="+loggedInUser.email)
          .then(res => res.json())
          .then(data =>setAdmin(data))
      }, []);
     
    return (
        <div className="design pt-5">
               <Link to="/home"><img style={{height:'40px',marginBottom:'50px'}} src={logos} alt=""/></Link> 
             <ul style={{listStyle:'none',fontWeight:'bold'}}>
            {admin.length=== 0 ? <>  <Link to="/customerOrder">
                <div className="d-flex mb-3" style={{display:'inline-block'}}>
                <span className="mr-2"><FontAwesomeIcon icon={faShoppingCart} /></span>  <li>Order</li>
                </div>
                </Link>
                <Link to="/serviceList">
               <div  className="d-flex mb-3">
                    <span className="mr-2"><FontAwesomeIcon icon={faTaxi} /></span>   <li>Service list</li>
               </div>
               </Link> 
               <Link to="/mainReview">
                 <div className="d-flex mb-3"> 
                 <span className="mr-2"> <FontAwesomeIcon icon={faFilePdf } /></span>   <li>Review</li>
                 </div>
                 </Link></>:
                 <>
                  <Link to="/adminServiceList">
                 <div className="d-flex mb-3"> 
                 <span className="mr-2"> <FontAwesomeIcon icon={faFilePdf } /></span>   <li> All service</li>
                 </div>
                 </Link>
                 <Link to="/addservice">
                 <div className="d-flex mb-3"> 
                 <span className="mr-2"> <FontAwesomeIcon icon={faFilePdf } /></span>   <li>Add Service</li>
                 </div>
                 </Link>
                 <Link to="/makeadmin">
                 <div className="d-flex "> 
                 <span className="mr-2"> <FontAwesomeIcon icon={faFilePdf } /></span>   <li>Make Admin</li>
                 </div>
                 </Link>
                 
                 </>
                 
                 
                 }
            
            
                 
             
            
              
             

             </ul>
        </div>
    );
};

export default CustomerSidebar;