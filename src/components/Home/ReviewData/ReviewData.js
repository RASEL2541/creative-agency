import React from 'react';

const ReviewData = ({data}) => {
    
    return (
        <div className="col-md-4">
            <div style={{height:'250px'}} className="card mb-3">
            <div className="card-body">
                <div className="d-flex">
                    <div>
                       <img style={{width:'50px'}} src={data.photo} alt=""/>

                    </div>
                    <div  className="ml-3">
                        <h5>{data.name}</h5>
                        <h6>{data.title}</h6>
                    </div>
                </div>
                <p className="text-justify pt-2">{data.dec}</p>
            </div>
            </div>
        </div>
    );
};

export default ReviewData;