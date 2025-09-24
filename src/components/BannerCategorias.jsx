import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import './BannerCategorias.scss'
import { getCategories } from '../utils';

function BannerCategorias() {
    var settings = {
    className:'slider-categorias',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    touchMove: true,
    variableWidth:true
    
  }

  const [categorias, setCategorias] = useState([])  

  //Simula o carregamento dos dados de um API, para flexibilidade em adicionar/excluir categorias
  useEffect(() => {
      async function fetchCategories(){
      setCategorias(await getCategories())
      }
      fetchCategories()
  },[])


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