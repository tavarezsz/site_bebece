import React from 'react'
import Slider from 'react-slick'
import BlogPost from './BlogPost'
import './BlogSlider.scss'

function BlogSlider() {
    var settings = {
    dots: true,
    className: "blog-slider",
    Infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

    const posts = [
        {id:1, title: "Novo logo, mesma essência.", content: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!", image: "/static/images/blog/post1.png"},
        {id:2, title: "É amanhã", content: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️", image: "/static/images/blog/post2.png"},
        {id:3, title: "Descubra o glamour em cada passo.", content: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨", image: "/static/images/blog/post3.png"}
    ]

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