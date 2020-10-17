import React from 'react';
import { useForm } from 'react-hook-form';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';

const AddService = () => {
const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        fetch('http://localhost:5000',{
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
            <div className='bg-white p-5'>
    <form  onSubmit={handleSubmit(onSubmit)}>
    <input style={{width:'350px',border:'none',borderBottom:'1px solid gray'}} placeholder="Service title"  name="name" ref={register({ required: true })} />
    {errors.name && <span>Service title is required</span>}
    <br/>
    <input style={{width:'350px',paddingBottom:'60px',border:'none',borderBottom:'1px solid gray'}} placeholder="Decription" name="decription" ref={register({ required: true })} />
    {errors.service && <span>Decprition is required</span>}
    <br/>
    <input type="file" placeholder="price" name="file" ref={register({ required: false })} />
    <br/>
    <input  style={{width:'100px',backgroundColor:'black',color:'white'}} type="submit" value="send"/>
    </form> 
            </div>
         </div>
     </div>
    );
};

export default AddService;