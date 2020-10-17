import React from 'react';
import CustomerFrom from '../CustomerFrom/CustomerFrom';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const CustomerOrder = () => {
    return (
        <div className="row mt-5 mx-5">
           <div className="col-md-3">
               <CustomerSidebar></CustomerSidebar>
            </div> 
            <div style={{backgroundColor:"#F4F7FC",height:'555px'}}  className="pt-5 pl-5 col-md-9">
                <CustomerFrom></CustomerFrom>
            </div>
        </div>
    );
};

export default CustomerOrder;