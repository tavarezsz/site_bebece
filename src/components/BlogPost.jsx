import React from 'react'
import './BlogPost.scss'

function BlogPost({title,content,image}) {
  return (
    <div className='blog-card'>
        <img src={image} alt="blog image" />
        <h2>{title}</h2>
        <p>{content}</p>
        <a href="/">Saiba mais!</a>
    </div>
  )
}

export default BlogPost