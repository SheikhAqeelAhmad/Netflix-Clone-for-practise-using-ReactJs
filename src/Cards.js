import React from 'react';
import './Sdata';



function Cards(props) {
    console.log(props);
return (
    <>
    <div className="col-md-4">
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top"  src={props.imagesrc} alt="Card  cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="d-flex justify-content-center">
                      <a href={props.link}><button className="btn btn-success">Watch Now</button></a>
                    </div>
                </div>
        </div>
        </div>  
</>

)
}
export default Cards;