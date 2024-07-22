import React, { useState } from 'react'
import {Link}from "react-router-dom"
import Counter from './counter';
import HomePage from './HomePage';
export default function Home() {
  const [displayCounter,setDisplayCounter]=useState(false);
  if(displayCounter){
    return<Counter></Counter>
  }
  return (
    <div>
     <h1>Home</h1>
     <HomePage></HomePage>
     <Link to ="/login">Login</Link><br></br>    
    </div>
  )
}
