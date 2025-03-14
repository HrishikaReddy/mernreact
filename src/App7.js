import React from 'react'
import { useState } from 'react'
// useState is predefined so importing

export default function App7 () {
    const[count, setCount] = useState(0) //count, setCount are variables can take any
  return (
    <div> 
        <button onClick={()=>setCount(count-1)}>-</button>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
