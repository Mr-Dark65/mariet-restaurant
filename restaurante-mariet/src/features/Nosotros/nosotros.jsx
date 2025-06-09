import React from "react";
import bgImage from "../../assets/imagen-nosotros.webp";
import WelcomeMessage from "../../shared/MessageFormat/AnimatedMessage";
import MisionAndVision from "../mision-vision/mision-vision";
const Nosotros = () => {
  return (
    <>
      <header
        className="relative bg-cover bg-center text-white min-h-[80vh] flex flex-col items-center justify-center font-semibold pb-[6rem] lg:pb-[8rem]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="text-center px-4 z-10 mb-8 md:mb-12 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic drop-shadow-lg ">
            NUESTRA HISTORIA
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold drop-shadow">
            Conoce la esencia que da sabor a nuestra cocina
          </p>
        </div>
        <WelcomeMessage />
      </header>
      <div className="w-full flex justify-center bg-orange-50 py-12">
        <div className="bg-orange-50 rounded-lg  max-w-3xl w-full px-8 py-10 mx-4">
          <div className="text-center mb-8 text-transparent">
            <span className="block text-lg font-semibold mb-2">NUESTRA</span>
            <span className="block text-3xl md:text-4xl font-bold italic">
              <span className="font-bold not-italic italic">
                PROMESA DE MARCA
              </span>
            </span>
          </div>
          <div className="text-justify text-base md:text-lg text-amber-900 space-y-6 hidden">
            <p>
              Mariet promete ofrecer siempre comida fresca, saludable y con
              sabor a hogar. Un lugar donde la nutrición se fusiona con el
              diseño emocional para generar experiencias memorables.
            </p>
          </div>
          <div className="h-24 bg-orange-50"></div>
        </div>
      </div>
      <MisionAndVision/>
    </>
  );
};

export default Nosotros;
