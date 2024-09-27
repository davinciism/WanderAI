import React from 'react'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <nav className='flex justify-between  shadow-md p-3 items-center px-5'>
        <h3 className='font-bold'>WanderAI</h3>
        <Button>Sign in</Button>
    </nav>
  )
}

export default Navbar