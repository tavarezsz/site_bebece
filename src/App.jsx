import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import SliderBanner from './components/SliderBanner';
import BannerCategorias from './components/BannerCategorias';
import Footer from './components/Footer';
import BannerNavegacao from './components/BannerNavegacao';
import ProductSlider from './components/ProductSlider';
import BlogSlider from './components/BlogSlider';
import Sidebar from './components/Sidebar';
import Message from './components/Message';

function App() {

  const [SidebarOpen, setSidebarOpen] = useState(false) //controla o estado da sidebar de fora dos componentes
  const [showMessage, setShowMessage] = useState(false) //controla o estado do popup de mensagem
  const [cartItens, setCartItens] = useState(0) //contador de itens do carrinho



  return (
  <div>
    <Header cartCounter={cartItens} onMenuClick={() => setSidebarOpen(true)}/>
      <div className="App">

        <SliderBanner/>
        <BannerCategorias/>
        <BannerNavegacao/>
        <ProductSlider onAddtoCart={() => 
        {
          setShowMessage(true)
          setCartItens(cartItens+1)
        }}/>
        <BlogSlider/>
        <Footer/>
        <Sidebar isOpen={SidebarOpen} onClose={() => setSidebarOpen(false)}/>

        {/* Renderiza o componente de mensagem so quando ativo*/}  
        {showMessage && (
          <Message
            msg={"Adicionado ao Carrinho"}
            onClose={() => setShowMessage(false)}
          />   
        )}

      </div>
  </div>
  );
}

export default App;
