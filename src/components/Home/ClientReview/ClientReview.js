import React from 'react';
import photo from '../../../images/customer-1.png'
import photo1 from '../../../images/customer-2.png'
import photo2 from '../../../images/customer-3.png'
import ReviewData from '../ReviewData/ReviewData';

const ClientReview = () => {
    const review=[
        {photo:photo,name:'Nash Patrik',title:'CEO.Manpol',dec:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aut sint eaque unde, eos ut?'},
        {photo:photo1,name:'Miriam Burron',title:'CEO.Manpol',dec:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aut sint eaque unde, eos ut?'},
        {photo:photo2,name:'Bria Malone',title:'CEO.Manpol',dec:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aut sint eaque unde, eos ut?'}
    ]
    return (
      <div className="d-flex justify-content-center">
            <div style={{width:'75%'}} className="row">
            {
                review.map(data=><ReviewData data={data}></ReviewData>)
            }
        </div>
      </div>
    );
};

export default ClientReview;