import React from 'react'
import { useParams } from 'react-router-dom'

function Posts() {
    const params=useParams()
  return (
    
    <div>
      <h1>Post{params.postId}</h1>
    </div>
  )
}

export default Posts
