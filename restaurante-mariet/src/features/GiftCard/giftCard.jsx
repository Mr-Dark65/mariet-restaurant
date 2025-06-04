import React, { useEffect, useRef, useState } from 'react';
import image from '../../assets/59-1.png'; 

const GiftCardMariet = () => {
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
      className="bg-orange-50 text-[#4c2f27] py-12 px-6 md:py-16 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Contenedor de imagen */}
        <div 
          className={`w-full md:w-5/12 lg:w-2/5 order-2 md:order-1 transform transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <img 
            src={image} 
            alt="Gift Card de Mariet" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Contenedor de texto */}
        <div 
          className={`w-full md:w-7/12 lg:w-3/5 space-y-4 order-1 md:order-2 transform transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            <span className="italic">Regala sabor,</span><br />
            <span className="not-italic">Regala Mariet</span>
          </h2>
          
          <p className="text-base md:text-lg leading-snug">
            Sorprende a esa persona especial con una Gift Card de Mariet y regálale una experiencia llena de sabor, calidez y buenos momentos. Disponible en diferentes valores, ideal para cumpleaños, aniversarios o simplemente.
          </p>

          <button className="mt-2 px-6 py-2 border-2 border-[#4c2f27] text-[#4c2f27] font-bold hover:bg-[#4c2f27] hover:text-white transition">
            OBTEN AHORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftCardMariet;