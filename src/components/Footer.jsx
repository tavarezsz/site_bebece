import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='logo-container'>
        <img src="static/images/logos/logo-branco-grande.png" alt="Bebecê" />
        </div>
        <div className='icon-container'>
            <BsInstagram  className='social-icon'/>
            <BsFacebook className='social-icon'/>
            <BsPinterest className='social-icon'/>
            <BsTwitter className='social-icon'/>
            <BsTiktok className='social-icon'/>
        </div>

        <div className='text-container'>
            <span>Sobre a empresa</span>
            <p>Quem somos</p>
            <p>Fale Conosco</p>
        </div>

        <div className='text-container'>
            <span>Políticas</span>
            <p>Política de Privacidade</p>
            <p>Termos de Uso</p>
            <p>Política de Entrega</p>
            <p>Política de Cupom e Descontos</p>
        </div>
    </footer>
  )
}

export default Footer