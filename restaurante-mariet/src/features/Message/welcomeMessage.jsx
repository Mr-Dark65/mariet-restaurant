import React, { useEffect, useRef, useState } from 'react';

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (messageRef.current) observer.observe(messageRef.current);

    return () => {
      if (messageRef.current) observer.unobserve(messageRef.current);
    };
  }, []);

  return (
    <div 
      ref={messageRef}
      className={`absolute bottom-[-6rem] md:bottom-[-4rem] bg-orange-50 backdrop-blur-md text-amber-900 p-6 md:p-8 rounded-lg shadow-lg w-11/12 md:w-[40%] mx-auto border
      transition-all duration-1000 ease-out
      ${isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-95'}`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Atrévete a Probar lo Inolvidable</h2>
      <p className="text-md md:text-lg leading-relaxed text-justify">
        En Mariet, cada plato está pensado para hacerte sentir como en casa, con un toque de sabor que te lleva más allá. Cocinamos con ingredientes frescos, pasión auténtica y el deseo de compartir momentos inolvidables. Ya sea tu primera visita o seas parte de la familia, aquí siempre tendrás un lugar en nuestra mesa.
      </p>
    </div>
  );
};

export default WelcomeMessage;