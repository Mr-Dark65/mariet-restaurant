import React from 'react';
import WelcomeMessage from '../Message/welcomeMessage';
import bgImage from '../../assets/imagen-inicio.png'; 

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center text-white min-h-[80vh] flex flex-col items-center justify-center font-semibold pb-[6rem] lg:pb-[8rem] "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="text-center px-4 z-10 mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic">BIENVENIDO</h1>
        <p className="mt-4 text-lg md:text-xl font-semibold">A tu nuevo lugar favorito para comer bien.</p>
        <button className="mt-6 px-6 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-[#451d1a] transition">
          RESERVAR AHORA
        </button>
      </div>

      <WelcomeMessage />
    </header>
  );
};

export default Header;