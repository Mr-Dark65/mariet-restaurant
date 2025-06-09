import React from 'react';
import Header from '../features/Header/header';
import FoodGallery from '../features/FoodGalery/foodGalery';
import VisionMariet from '../features/Vision/vision';
import GiftCardMariet from '../features/GiftCard/giftCard';

function Home() {
  return (
    <>
      <Header />
      <FoodGallery />
      <VisionMariet />
      <GiftCardMariet />
    </>
  );
}

export default Home; 