import React from 'react';
import { useForm } from 'react-hook-form';

import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {

        fetch('http://localhost:5000/addAdmin',{
            method:'POST',
            headers:{'Content-Type':'application/json'} ,
            body:JSON.stringify(data)
         })
         .then(res =>res.json())
         .then(success=>{
            if(success){
              
            alert('You  created successfully')
            }
        })
    };
  



    return (
        <div className="row mt-5 mx-5">
        <div className="col-md-3">
          <CustomerSidebar></CustomerSidebar>
         </div> 
         <div style={{backgroundColor:"#F4F7FC",height:'550px'}}  className="pt-5 pl-5 col-md-9">
         <form  onSubmit={handleSubmit(onSubmit)}>
    
    
    
    <label><b>E-mail</b></label>
    <br/>

    <input style={{width:'350px',padding:'5px'}} placeholder="Your email"  name="email" ref={register({ required: true })} />
  
    {errors.email && <span>Name is required</span>}
    <br/>
    <br/>
    <input  style={{width:'100px',backgroundColor:'green',color:'white'}} type="submit" value="Submit"/>

  </form> 

         </div>
     </div>
    );
};

export default MakeAdmin;