import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import BlogPost from './BlogPost'
import './BlogSlider.scss'
import { getBlogPosts } from '../utils'

function BlogSlider() {
    var settings = {
    dots: true,
    Infinite: false,
    className: "blog-slider",
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [posts,setPosts] = useState([])

  //carrega os posts a cada montagem do componente
  useEffect(()=>{
    async function fetchPosts(){
      setPosts(await getBlogPosts())
    }
    fetchPosts()
  },[])


  return (
    <div className='blog-container'>
        <h3>Conheça mais</h3>
        <p>Fique por dentro de tudo que acontece na Bebecê</p>
        <Slider {...settings}>
            {posts.map((post) => (
                <BlogPost key={post.id} title={post.title.toUpperCase()} content={post.content} image={post.image}/>
            ))}
        </Slider>
    </div>
  )
}

export default BlogSlider