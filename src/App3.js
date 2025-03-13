import React from 'react'

export default function App3() {
    const greet = () => {
        alert("Hello World");
    }
    const greet1 = (value) => {
        alert(value);
    }
    const greet2 = (value) => {
        alert(value);
    }
    const greet3 = (value) => {
        alert(`Hello ${value}`);
    }
  return (
    <div>
        <button onClick={greet}>Greet</button>
        <button onClick={()=>greet1('Hi John')}>Greet1</button>
        <input type='text' onClick={(e)=>greet2(e.target.value)}/>
        <input type='text' onClick={(e)=>greet3(e.target.value)}/>
    </div>
  )
}
