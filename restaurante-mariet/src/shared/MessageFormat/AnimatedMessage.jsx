import React, { useEffect, useRef, useState } from "react";

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
      className={`absolute bottom-[-14rem] md:bottom-[-22rem] bg-orange-50 backdrop-blur-md text-amber-900 p-6 md:p-8   w-11/12 md:w-[48%] mx-auto
      transition-all duration-1000 ease-out
      ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#442420]">
        NUESTRA<br/>PROMESA DE MARCA
      </h2>
      <div className="text-justify text-base md:text-lg text-[#442420] space-y-6">
        <p>
          Mariet promete ofrecer siempre comida fresca, saludable y con sabor a
          hogar. Un lugar donde la nutrición se fusiona con el diseño emocional
          para generar experiencias memorables.
        </p>
        <p>
          Prometemos más que comida: entregamos experiencias hechas con amor.
          Nos comprometemos a mantener una cocina transparente, sin procesos
          ocultos ni aditivos innecesarios, con una presentación que despierte
          todos tus sentidos. Nuestro propósito es nutrirte con conciencia,
          fomentando relaciones cercanas y auténticas con cada persona que cruza
          nuestra puerta. En Mariet no solo comes bien, te sientes bien.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
