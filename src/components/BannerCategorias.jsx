import React from 'react'
import Slider from 'react-slick';
import './BannerCategorias.scss'

function BannerCategorias() {
    var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    touchMove: true,
    
  };

  const categorias = [ //organizando em lista de objetos para facilitar recebimento por função/api
    {nome: "Botas", imagem: "static/images/categorias/banner-botas.png"},
    {nome: "Scarpins", imagem: "static/images/categorias/banner-scarpins.png" },
    {nome: "Sapatilhas", imagem: "static/images/categorias/banner-sapatilhas.png"},
    {nome: "Sandálias", imagem: "static/images/categorias/banner-sandalias.png"}
  ]

  return (
    <div className="categorias-container">
       <h3>Categorias</h3>
       <Slider {...settings}>
            {categorias.map((categoria,i) => ( //carrega todos os objetos da lista categorias como elementos do slider
                <div key={i} className="card-categoria">
                    <img src={categoria.imagem} alt={categoria.nome}/>
                    <p>{categoria.nome}</p>
                </div>
            ))}
       </Slider>
    </div>
  )
}

export default BannerCategorias