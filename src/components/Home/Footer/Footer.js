import React from 'react';

const Footer = () => {
    return (
      <div style={{backgroundColor:'#FBD062',marginTop:'100px'}} className="d-flex justify-content-center">
            <div style={{ width:'75%'}} className="row m-5">
            <div className="col-md-6">
            <h3 style={{marginBottom:'30px'}}>Let us handle your project, professionally.</h3>
           <p>with well written codes we build amazing apps for all platforms, mobile and web apps in general </p>
            </div>
            <div className="col-md-6">
                <form action="">
                    <input placeholder="Your email address" className="form-control p-2" type="text"/>
                    <br/>
                    <input placeholder="Your name/company name" className="form-control p-2" type="text"/>
                    <br/>
                    <textarea  placeholder="message " className="form-control pb-5"></textarea>
                        <br/>
                    <button style={{width:'80px',backgroundColor:'black',color:'white'}}>Send</button>
                </form>
            </div>
        </div>
      </div>
    );
};

export default Footer;