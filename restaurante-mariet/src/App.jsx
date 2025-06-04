import React from 'react';
import Navbar from './features/Navbar/navbar';
import Header from './features/Header/header';
import FoodGallery from './features/FoodGalery/foodGalery';
import VisionMariet from './features/Vision/vision';
import GiftCardMariet from './features/GiftCard/giftCard';
import Footer from './features/Footer/footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <FoodGallery />
      <VisionMariet />
      <GiftCardMariet />
      <Footer />
    </div>
  );
}

export default App;