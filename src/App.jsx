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

function App() {

  const [SidebarOpen, setSidebarOpen] = useState(false) //controla o estado da sidebar de fora dos componentes
  return (
    <div>
    <Header onMenuClick={() => setSidebarOpen(true)}/>
    <div className="App">

      <SliderBanner/>
      <BannerCategorias/>
      <BannerNavegacao/>
      <ProductSlider/>
      <BlogSlider/>
      <Footer/>
      <Sidebar isOpen={SidebarOpen} onClose={() => setSidebarOpen(false)}/>
    </div>
    </div>
  );
}

export default App;
