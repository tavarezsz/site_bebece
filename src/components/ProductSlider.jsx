import React from 'react'
import { getProducts } from '../utils'
import ProductCard from './ProductCard'
import Slider from 'react-slick'
import './ProductSlider.scss'

const products = await getProducts()

function ProductSlider({onAddtoCart}) {
   var settings = {
    className: "product-slider",
    Infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centeMode:true,
    variableWidth: true, //Necessario para mostar o produtos que não cabem, de forma "cortada"
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
            onAdd={onAddtoCart}
            />
        ))}
        </Slider>
    </div>
  )
}

export default ProductSlider