import React, { useState } from "react";
import logoMariet from "../../assets/logo-mariet.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { delay: 0.15, type: "spring", stiffness: 300, damping: 30 } }
  };

  const overlayVariants = {
    open: { opacity: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <>
      <header className="bg-orange-50 p-4 flex justify-between items-center md:justify-around font-bold md:justify-center">
        {/* Menú hamburguesa (solo mobile) */}
        <div className="md:hidden">
          <button 
            onClick={toggleSidebar}
            className="text-amber-800 focus:outline-none transition-transform hover:scale-110"
          >
            {isOpen ? (
              <FaTimes size={24} className="text-amber-700" />
            ) : (
              <FaBars size={24} className="text-amber-700" />
            )}
          </button>
        </div>

        {/* Enlaces de navegación (ocultos en mobile) */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-4">
            <a href="/" className="text-amber-800 hover:text-amber-600 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-amber-100">INICIO</a>
            <a href="/nosotros" className="text-amber-800 hover:text-amber-600 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-amber-100">ACERCA DE</a>
            <a href="/menu" className="text-amber-800 hover:text-amber-600 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-amber-100">MENÚS</a>
          </nav>
        </div>

        {/* Logo (centrado en mobile) */}
        <div className="flex-1 flex justify-center md:flex-none ml-25">
          <img src={logoMariet} alt="mariet-logo" className="h-10 transition-transform hover:scale-105 " />
        </div>

        {/* Segundo grupo de enlaces (oculto en mobile) */}
        <div className="hidden md:block">
          <nav className="flex space-x-4">
            <a href="/contactanos" className="text-amber-800 hover:text-amber-600 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-amber-100">CONTÁCTANOS</a>
            <a href="#novedades" className="text-amber-800 hover:text-amber-600 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-amber-100">NOVEDADES</a>
            <a href="#pedir" className="text-amber-800 hover:text-amber-600 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-amber-100">PIDE PARA LLEVAR</a>
          </nav>
        </div>

        {/* Espacio para alinear correctamente en mobile */}
        <div className="md:hidden w-6"></div>
      </header>

      {/* Sidebar para mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-orange-50 to-amber-100 z-50 shadow-2xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                  <img src={logoMariet} alt="mariet-logo" className="h-10" />
                  <button 
                    onClick={toggleSidebar}
                    className="text-amber-700 focus:outline-none transition-transform hover:rotate-90 hover:scale-110"
                  >
                    <FaTimes size={26} />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col space-y-5">
                  {[
                    {href: '/', text: 'Inicio'},
                    { href: "/nosotros", text: "Acerca de" },
                    { href: "/menu", text: "Menús" },
                    { href: "/contactanos", text: "Contáctanos" },
                    { href: "#novedades", text: "Novedades" },
                    { href: "#pedir", text: "Pide para Llevar" }
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-amber-800 text-xl py-3 px-4 rounded-xl hover:bg-amber-200 hover:text-amber-900 transition-all duration-300 transform hover:translate-x-2"
                      onClick={toggleSidebar}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-amber-200">
                  <p className="text-amber-700 text-sm">Bienvenido a Mariet</p>
                </div>
              </div>
            </motion.div>

            {/* Overlay con degradado */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 z-40 bg-gradient-to-r from-black/30 to-transparent backdrop-blur-sm"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;