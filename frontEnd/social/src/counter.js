import React, { useEffect, useState } from 'react'
import '../src/CSS/counter.css'

export default function Counter() {
    const [count , setCount] = useState(0);
    const [secondcount,setsecondCount] = useState(100);
    useEffect(()=>{
        console.log("Mounting Phase....");
        return function(){
          console.log('exit....');
        }
    },[])
    useEffect(()=>{
        console.log("Updating Phase....");
    },[count,secondcount])
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button className="counter"onClick={()=>{setCount(count+1)}}>+</button>
        <br></br>
        <button className="counter" onClick={()=>{setCount(count-1)}}>-</button>
        <h1>-----------------</h1>
        <h1>Second Counter : {secondcount}</h1>
        <button className="counter" onClick={()=>{setsecondCount(secondcount+1)}}>+</button>
        <br></br>
        <button className="counter" onClick={()=>{setsecondCount(secondcount-1)}}>-</button>
    </div>
  )
}