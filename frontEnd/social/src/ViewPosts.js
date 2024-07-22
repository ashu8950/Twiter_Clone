import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './CSS/viewPost.css'
export default function ViewPosts() {
  const [apiData,setApiData]=useState([])
  const [loading,isLoading]=useState(true)
  const [apiError,setApiError]=useState(false)
  const navigate=useNavigate()
  useEffect(() =>{
    if(localStorage.getItem("jwtToken")) {
      (async()=>{
        try{
          const response = await axios.get("http://localhost:3000/posts",{
            headers:{
              authorization: "Bearer " + localStorage.getItem('jwtToken')
            }
          })
        //  console.log(response.data);
        setApiData(response.data)
        isLoading(false)
        }
         
        catch(error){
          console.log(error)
          // isLoading(false)
          setApiError(true)
        }
      })()
  }else{
    navigate('/login')
  }
    },[])
    const displayData=apiData.map((data)=><h4 key={data.id}>Title :{data.title} Content : {data.content}</h4>)
    if(loading){
      return <h1>Loading.....</h1>
    }
    if(apiError){
      return <h1>Something went wrong</h1>
    }
  return (
    <div className='viewPostContainer'>
      <h1 className='viewPostText'>Posts : </h1>
      {displayData}
    </div>
  )
}
