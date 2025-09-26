import React, { useState } from 'react'
import './ProductCard.scss'

function ProductCard({name,image,price, onAdd}) {
    const [heartClicked,setHeartClicked] = useState(false) //controla o estado do icone de coração

    //Inverte o estado quando clicka no icone de coração
    const handleHeartClick = function(){
        if(heartClicked)
            setHeartClicked(false)
        else
            setHeartClicked(true)
    }

    const amount = price.amount
    const isDiscount = price.isDiscount
    let discount
    if(isDiscount != null){
        discount = Math.floor(100 - (isDiscount/amount) * 100) //resulta na porcentagem de disconto
    }
  return (
    <div className='product-card-container'>
        
        <div className='product-image-container'>
            <button className='icon-top' onClick={handleHeartClick}>
                <img src={ !heartClicked ? "/static/images/icons/coracao.svg" : "/static/images/icons/coracao2.svg"} alt="" />
            </button>

            <img src={image} alt="" />

            <button className='icon-bottom' onClick={onAdd}>
                <img src="/static/images/icons/adicionar-carrinho.svg" alt="" />
            </button>
            {discount && <p className='discount-percent'>%{discount} OFF</p>}
        </div>
        <p>{name}</p>

        {isDiscount ? ( //renderiza apenas o preço original se não tiver desconto, se tiver gera os dois
           <p className='price'><span className='discount-value'>R$ {amount}</span> R$ {isDiscount}</p> 
        ) : (
            <p className='price'>R$ {amount}</p>
        )}


    </div>
  )
}

export default ProductCard