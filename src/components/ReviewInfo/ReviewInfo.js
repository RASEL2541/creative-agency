import React from 'react';
import './ReviewInfo.css'
const ReviewInfo = () => {
    return (
        <div className="inputStyle">
            <form action="">
                <input placeholder="Your name" style={{width:'350px'}} type="text"/>
                <br/>
                <br/>
                <input placeholder="Company name Destination"  style={{width:'350px'}} type="text"/>
                <br/>
                <br/>
                 <textarea placeholder="Destination" style={{width:'350px'}}></textarea>
                 <br/>
                 <br/>
                 <input style={{width:'100px',backgroundColor:'black',color:'white'}} type="submit" value="Submit"/>
               
            </form>
        </div>
    );
};

export default ReviewInfo;