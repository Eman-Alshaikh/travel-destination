import '../tours/Tours.css'
import React from "react";

import Tour from './tour/Tour'


function Tours(props) {

  
   return (
        <>
            {props.data.map((tour,id) => {
                return (
                 <Tour  tour={tour} key = {id} />
                
                );
            })}
        </>
    );
}
 
export default Tours;