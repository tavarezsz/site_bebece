import React from 'react'
import { getProducts } from '../utils'
import ProductCard from './ProductCard'
import Slider from 'react-slick'

const products = await getProducts()

function ProductSlider() {
   var settings = {
    className: "product-slider",
    Infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centeMode:true,
    variableWidth: true,


    responsive: [ //ajuste para tela mobile
        {
            breakpoint : 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]

  }
  return (
    <div className='products-container'>
      <h3>Novidades</h3>
      <Slider {...settings}>
        {products.map((prod) => (
            <ProductCard key={prod.id}
            name = {prod.name}
            image = {prod.image}
            price={prod.price}
            />
        ))}
        </Slider>
    </div>
  )
}

export default ProductSlider