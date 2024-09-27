import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-24 gap-9'>
        <h1 className='text-center font-bold mt-16'>Plan your next trip using AI based on your mood and aspirations!</h1>
        <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vitae expedita molestiae blanditiis perspiciatis!</p>
        <Link to={'/create-trip'}>
            <Button>Get Started, it's Free</Button>
        </Link>
    </div>
  )
}

export default Hero