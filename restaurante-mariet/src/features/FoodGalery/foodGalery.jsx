import React from 'react';
import FoodCard from '../../shared/FoodCard/foodCard';
import img1 from '../../assets/pollo-asado.jpg';
import img2 from '../../assets/pollo-broaster.jpg';
import img3 from '../../assets/seco-de-carne.jpg';
import img4 from '../../assets/trigrillo.avif';
import img5 from '../../assets/Bolones.jpeg';
import img6 from '../../assets/carne-asada.jpg';

const FoodGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-[#fef6f0] py-16 px-6 md:px-20 pt-40 bg-orange-50 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <FoodCard key={index} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;