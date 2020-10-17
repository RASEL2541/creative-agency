import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
        <div style={{}} className="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#"><img style={{width:'80px',height:'30px'}} src={logo} alt=""/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
     
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active mr-3">
            <Link className='text-black' to="/home">Home</Link>
          </li>
          <li class="nav-item active mr-3">
            <Link className='text-black' to="">Our Portfolio</Link>
          </li>
          <li class="nav-item active mr-3">
          <Link className='text-black' to="">Our Team</Link>
            
          </li>
        
          <li class="nav-item active">
          <Link to="/login">
          <button style={{backgroundColor:'black',color:'white',padding:'2px 20px'}} type="button">Login</button>
          </Link>
          
    
          </li>

        </ul>
      </div>
    </nav>



        </div>
    );
};

export default Navbar;