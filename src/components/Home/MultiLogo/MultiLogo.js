import React from 'react';
import img1 from '../../../images/logos/slack.png'
import img2 from '../../../images/logos/google.png'
import img3 from '../../../images/logos/uber.png'
import img4 from '../../../images/logos/netflix.png'
import img5 from '../../../images/logos/airbnb.png'
import img6 from '../../../images/logos/slack.png'
import './MultiLogo.css'
const MultiLogo = () => {

    return (
        <div className="StylePhoto d-flex justify-content-center" >
               
            <div class="row mt-5 designPhoto"> 
            <div class="col mx-1"><img src={img1} alt=""/></div> 
            <div class="col mx-1"><img src={img2} alt=""/></div> 
            <div class="col mx-1 "><img src={img3} alt=""/></div> 
            <div class="col mx-1"><img src={img4} alt=""/></div> 
            <div class="col mx-1"><img src={img5} alt=""/></div> 
        </div>
        </div>
    );
};

export default MultiLogo;