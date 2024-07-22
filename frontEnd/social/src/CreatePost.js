import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/createPost.css';

const CreatePost = () => {
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("jwtToken")){
            navigate('/login');
        }
    },[])
    const handleTitle=(event)=>{
      setTitle(event.target.value)
    }
    const handleContent=(event)=>{
      setContent(event.target.value)
    }
    const handleFormData = async (event)=>{
      try {
        event.preventDefault()
      const response= await axios.post("http://localhost:3000/posts",{
            title:title,
            content:content
        },{
          headers:{
            authorization:"Bearer " +localStorage.getItem("jwtToken")
          }
        })
        if(response.status==201){
          navigate('/posts')
        }
      } catch (error) {
        
      }
    }
  return (
    <div className='create_container'>
      <h1 className='head'>Create Post : </h1>
      <form className='form'onSubmit={handleFormData}>
        <label className='formLabel'>Title : </label>
        <input className="formInput"type="text" value={title} onChange={handleTitle}></input>
        <label className='formLabel'>Content : </label>
        <textarea className="formTextArea" type="text" value={content} onChange={handleContent} rows={15}></textarea>
        <button className='formButton'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
