import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-3xl font-bold underline'>Welcome Pratik!</h2>
      <Button>Click me</Button>
    </>
  )
}

export default App
