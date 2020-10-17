import React from 'react';
import './CustomerFrom.css'
import { useForm } from 'react-hook-form';
const CustomerFrom = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
            fetch('http://localhost:5000/addData',{
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
        <div className="inputStyle">
          <form  onSubmit={handleSubmit(onSubmit)}>
              <input style={{width:'350px'}} placeholder="Your name/ company name"  name="name" ref={register({ required: true })} />
                {errors.name && <span>Name is required</span>}
          <br/>
         <br/>
         <input style={{width:'350px'}} placeholder="Your email"  name="email" ref={register({ required: true })} />
          {errors.email && <span>Name is required</span>}
     <br/>
     <br/>
     <input style={{width:'350px'}} placeholder="service" name="service" ref={register({ required: true })} />
   
     {errors.service && <span>Name is required</span>}
     <br/>
     <br/>
     <input style={{width:'350px'}} placeholder="detail" name="detail" ref={register({ required: true })} />
   
     {errors.detail && <span>Detail is required</span>}
     <br/>
     <br/>
     
     <input placeholder="price" name="price" ref={register({ required: true })} />
   
     {errors.price && <span>price is required</span>}
    <input type="file" placeholder="price" name="file" ref={register({ required: false })} />
     <br/>
     <br/>
     <input  style={{width:'100px',backgroundColor:'black',color:'white'}} type="submit" value="send"/>

   </form> 
        </div>
    );
};

export default CustomerFrom;