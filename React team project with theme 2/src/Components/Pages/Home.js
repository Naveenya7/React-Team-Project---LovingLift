import React from 'react';
import '../../App.css';
import Hero from '../Hero';
// import Cards from '../Cards';
import Footer from '../Footer';
import './Home.css';
import Cards from '../Cards';
import ImageSlider from '../ImageSlider';

function Home() {
  const images = [
    '/Images/img1.png',
    '/Images/img2.png',
    '/Images/img3.png',
    // '/Images/homehealth.png',
    // '/Images/homehuman.png',
  ];
  return(
    <div className="home-container">
    <Hero/>
    <ImageSlider images={images} />
    <Cards/>
   
    
    
    
    <Footer/>
    </div>

  );

}

export default Home;
