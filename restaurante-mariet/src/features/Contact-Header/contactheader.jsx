import React from 'react';
import ContactForm from '../Contact/contactForm';
import bgImage from '../../assets/imagen-contactos.avif'; 

const ContactHeader = () => {
  return (
      <>
      <header
      className="relative bg-cover bg-center text-white min-h-[80vh] flex flex-col items-center justify-center font-semibold pb-[6rem] lg:pb-[8rem] "
      style={{ backgroundImage: `url(${bgImage})` }}
      >
    <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="text-center px-4 z-10 mb-8 md:mb-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold italic">CONTÁCTANOS</h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold">¿Tienes una pregunta o quieres hacer una reserva?<br/>
        ¡Contáctanos hoy!.</p>
      </div>
    </header>
    <ContactForm/>
    </>
  );
};

export default ContactHeader;