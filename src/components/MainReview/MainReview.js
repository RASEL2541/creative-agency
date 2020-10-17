import React from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import ReviewData from '../Home/ReviewData/ReviewData';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const MainReview = () => {
    return (
        <div className="row mt-5 mx-5">
        <div className="col-md-3">
            <CustomerSidebar></CustomerSidebar>
         </div> 
         <div style={{backgroundColor:"#F4F7FC",height:'550px'}}  className="pt-5 pl-5 col-md-9">
            <ReviewInfo></ReviewInfo>
         </div>
     </div>
    );
};

export default MainReview;