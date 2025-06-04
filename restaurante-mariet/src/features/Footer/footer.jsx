import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#451d1a] text-white py-12 px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contenedor para Acerca de y Menús que se muestren en fila en mobile */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Sección Acerca de */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg uppercase mb-4">Acerca de</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Calvines sonros",
                  "Nuestra historia",
                  "El equipo",
                  "Trabaja con nosotros",
                  "Prensa y premios",
                  "Tienda",
                  "Testimonios",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-orange-300 transition duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sección Menús */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg uppercase mb-4">Menús</h3>
              <ul className="space-y-2 text-sm">
                {["Almuerzo", "Cena", "Postres", "Bebidas", "Infantil"].map(
                  (item) => (
                    <li
                      key={item}
                      className="hover:text-orange-300 transition duration-200 cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Sección Contacto */}
          <div className="sm:col-span-1 text-center sm:text-left">
            <div className="mb-6">
              <p className="uppercase text-sm font-semibold mb-2">
                Contáctanos
              </p>
              <p className="text-xl sm:text-2xl font-bold mb-4 hover:text-orange-300 transition duration-200 cursor-pointer">
                098 407 4643
              </p>
              <button className="border-2 border-white px-4 sm:px-6 py-2 font-semibold uppercase hover:bg-white hover:text-[#451d1a] transition duration-300 text-sm sm:text-base">
                Reservar ahora
              </button>
            </div>
          </div>

          {/* Sección Redes Sociales */}
          <div className="sm:col-span-1 text-center sm:text-left">
            <div>
              <p className="uppercase text-sm font-semibold mb-4">Síguenos</p>
              <div className="flex justify-center sm:justify-start">
                {/* Icono Facebook con ajuste específico */}
                <div className="mx-2 w-6 flex justify-center transform hover:scale-110 transition duration-200">
                  <FaFacebookF className="text-xl hover:text-orange-300" />
                </div>

                {/* Resto de iconos con contenedores consistentes */}
                {[
                  {
                    icon: (
                      <FaInstagram className="text-xl hover:text-orange-300" />
                    ),
                    key: "instagram",
                  },
                  {
                    icon: (
                      <FaTwitter className="text-xl hover:text-orange-300" />
                    ),
                    key: "twitter",
                  },
                  {
                    icon: (
                      <FaTiktok className="text-xl hover:text-orange-300" />
                    ),
                    key: "tiktok",
                  },
                ].map((item) => (
                  <div
                    className="mx-2 w-6 flex justify-center transform hover:scale-110 transition duration-200"
                    key={item.key}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Derechos */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-center text-gray-300">
          © 2025 Via Real — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;