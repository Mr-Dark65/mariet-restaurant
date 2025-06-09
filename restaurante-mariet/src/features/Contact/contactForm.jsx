import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="bg-[#f5e8d6] text-[#3a1d1a] py-16 px-2 md:px-8 font-sans w-full">
      {/* Títulos */}
      <div className="text-center mb-12">
        <h2 className="text-lg font-medium">Nos encantaría saber de ti.</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold italic mt-2">
          EN<span className="not-italic">VÍANOS</span> UN MENSAJE
        </h1>
      </div>

     {/* Contenido */}
     <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 justify-center items-center w-full max-w-6xl mx-auto">
        {/* Formulario */}
        <div className="w-full md:w-1/2 lg:w-2/5 space-y-6 text-center md:text-left">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre</label>
            <input
              type="text"
              placeholder="Ingresa tu Nombre"
              className="w-full border border-[#3a1d1a] px-4 py-3 text-sm placeholder:text-[#b9a89f] bg-[#f5e8d6] rounded-none focus:outline-none focus:ring-1 focus:ring-[#3a1d1a]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              placeholder="Ingresa tu Correo electrónico"
              className="w-full border border-[#3a1d1a] px-4 py-3 text-sm placeholder:text-[#b9a89f] bg-[#f5e8d6] rounded-none focus:outline-none focus:ring-1 focus:ring-[#3a1d1a]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Pregunta/Comentario</label>
            <textarea
              placeholder="Ingresa tu Pregunta/Comentario"
              className="w-full border border-[#3a1d1a] px-4 py-3 h-40 text-sm placeholder:text-[#b9a89f] bg-[#f5e8d6] rounded-none focus:outline-none focus:ring-1 focus:ring-[#3a1d1a]"
            />
          </div>
          <button className="mt-2 border-2 border-[#3a1d1a] px-8 py-3 font-semibold hover:bg-[#3a1d1a] hover:text-[#f5e8d6] transition-colors duration-300 w-full md:w-auto">
            ENVIAR
          </button>
        </div>

        {/* Información */}
        <div className="w-full md:w-1/3 space-y-6 text-sm md:text-base text-center md:text-left">
          <div>
            <h2 className="font-bold text-xs mb-1 uppercase tracking-widest">Contáctanos</h2>
            <p className="text-2xl font-extrabold">098 407 4643</p>
          </div>
          <div>
            <h2 className="font-bold text-xs mb-1 uppercase tracking-widest">Dirección</h2>
            <p>
              Calle Río Coca y Río Cutuchi <br />
              Sector UTA Huachi
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xs mb-1 uppercase tracking-widest">Redes Sociales</h2>
            <div className="flex gap-4 items-center text-xl mb-2 text-[#3a1d1a] justify-center md:justify-start">
              <FaFacebookF className="hover:scale-110 cursor-pointer" />
              <FaInstagram className="hover:scale-110 cursor-pointer" />
              <FaTwitter className="hover:scale-110 cursor-pointer" />
              <FaTiktok className="hover:scale-110 cursor-pointer" />
            </div>
            <p className="text-sm">Mariet Restaurante</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
