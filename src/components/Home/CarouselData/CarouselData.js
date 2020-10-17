import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import carousel from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import "slick-carousel/slick/slick-theme.css";
const CarouselData = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
       <div style={{backgroundColor:'#111430'}} className="mt-5 mb-5 p-5" >
           <h4 className="text-center text-white mb-5">Here of some of <span style={{color:'#699952'}}>our workd</span></h4>
           <div className="d-flex justify-content-center" >
          
           
            <Slider style={{width:'75%'}} className="row " {...settings}>
            
        <div className="col-md-4 mr-3">
        
         <div className="" >
         <img style={{height:'250px',width:'200px'}} src={carousel} alt=""/>
         </div>
        </div>
        <div  className="col-md-4">
        <div>
        <img style={{height:'250px',width:'200px'}}src={carousel2} alt=""/>
        </div>
        </div>
        <div  className="col-md-4">
        <div>
        <img style={{height:'250px',width:'200px'}}src={carousel3} alt=""/>
        </div>
        </div>
        <div  className="col-md-4">
        <div>
        <img style={{height:'250px',width:'200px'}}src={carousel4} alt=""/>
        </div>
        </div>
        <div  className="col-md-4">
        <div>
        <img style={{height:'250px',width:'200px'}} src={carousel5} alt=""/>
        </div>
        </div>
        <div  className="col-md-4">
       <div>
       <img style={{height:'250px',width:'200px'}}src={carousel4} alt=""/>
       </div>
        </div>
        <div  className="col-md-4">
        <div>
        <img style={{height:'250px',width:'200px'}} src={carousel5} alt=""/>
        </div>
        </div>
      </Slider>
       </div>
       </div>
    );
};

export default CarouselData;