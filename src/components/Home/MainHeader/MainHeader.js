import React from 'react';
import './MainHeader.css'
import img from '../../../images/logos/Frame.png'
import Navbar from '../Navbar/Navbar';
const MainHeader = () => {
    return (
        <section className="extraStyle">
        
           <div className="container  row  content" >
           <Navbar></Navbar>
           <div className="col-md-6 px-5  mt-5" >
                <h2>Let's Grow Your Brand To The Next Level</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolor reprehenderit totam! Voluptatem, voluptas vitae.</p>
                <button style={{backgroundColor:'black',color:'white',padding:'0 20px'}}>Hire Us</button>
             </div>
              <div className="col-md-6  mt-5">
                 <img src={img} alt=""/>
              </div>
           
            </div>     
        
        </section>
    );
};

export default MainHeader;