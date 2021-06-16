import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

function showdata(val){
   // console.log(val);
    return (
       <Cards imagesrc={val.banner}  title={val.title}  link={val.link}/>
                
     )
}


function App( ){
    return (
        <>
          <h1 className="heading">Top 5 Netflix </h1>
          <div className="container">
        <div className="row ">
             
          {Sdata.map((showdata))}
          </div>
    </div>
    

    </>
    )}
export default App;