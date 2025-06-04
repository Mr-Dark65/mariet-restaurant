import React, { useEffect, useRef, useState } from 'react';
import imgpropietario from "../../assets/chef.webp";

const VisionMariet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '100px'
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#d9b8a6] text-[#4c2f27] flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      <div
        className={`md:w-1/2 py-6 pr-6 pl-8 md:py-10 md:pr-10 md:pl-20 transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
      >
        <p className="uppercase font-bold mb-2">PROPIETARIO</p>
        <h2 className="text-2xl md:text-3xl font-bold italic mb-4">LA VISIÓN DETRÁS DE MARIET</h2>
        <p className="text-md text-justify">
          Mariet nació del deseo de crear un lugar donde el sabor, la calidez y los buenos momentos se encuentren. Inspirados por recetas familiares, viajes culinarios y una pasión profunda por la cocina auténtica, decidimos abrir un espacio donde cada detalle —desde los ingredientes hasta la atención— refleje amor y dedicación.
        </p>
        <p className="mt-4">Lo que comenzó como una pequeña idea</p>
      </div>

      <div
        className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
      >
        <img
          src={imgpropietario}
          alt="Propietario"
          className="w-full max-w-md h-auto rounded-lg object-cover block"
        />
      </div>
    </section>
  );
};

export default VisionMariet;
