import React from 'react'
import { useLocation } from 'react-router-dom';


function ViewTrip() {
  
    const location = useLocation();
    const res = location.state; // This contains the passed data
    console.log(res)

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-160 px-5 mt-10 mb-20'>
       
    </div>
  )
}

export default ViewTrip