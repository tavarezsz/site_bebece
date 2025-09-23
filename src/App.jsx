import React from 'react';
import './App.scss';
import Header from './components/Header';
import SliderBanner from './components/SliderBanner';
import BannerCategorias from './components/BannerCategorias';
import Footer from './components/Footer';
import BannerNavegacao from './components/BannerNavegacao';
import ProductSlider from './components/ProductSlider';
import BlogSlider from './components/BlogSlider';

function App() {
  return (
    <div>
    <Header/>
    <div className="App">

      <SliderBanner/>
      <BannerCategorias/>
      <BannerNavegacao/>
      <ProductSlider/>
      <BlogSlider/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
