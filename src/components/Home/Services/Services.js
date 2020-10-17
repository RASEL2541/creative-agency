import React from 'react';
import photo from '../../../images/icons/service1.png'
import photo1 from '../../../images/icons/service2.png'
import photo2 from '../../../images/icons/service2.png'
import ServiceData from '../ServiceData/ServiceData';
import './Services.css'
const service=[
    {image:photo,
    title:'Web & Mobile Design',
    dec:'We craft stunning and amazing web Ul using a well drrafted UX to fit your product.'
    
    },
    {image:photo1,
        title:'Graphic Design',
        dec:'Amazing flyers social media posts and brand representations that would make your brand stand out'
        
   },
   {image:photo2,
    title:'Web Development',
    dec:'With well written codes. We build amazing apps for all platforms mobile and web apps in general'
    
    }
    
]
const Services = () => {
    return (
       <section className=" hoverDesign">
                
                <h3 className="text-center pt-5">Provide awesome <span style={{color:'#7AB259'}}>services</span></h3>
                
                <br/>
           <div className="d-flex justify-content-center pt-3">
           <div className="row extraDesign ">
                {

                  service.map(data =><ServiceData service={data}></ServiceData>)
                }
           </div>
           </div>
       </section>
    );
};

export default Services;