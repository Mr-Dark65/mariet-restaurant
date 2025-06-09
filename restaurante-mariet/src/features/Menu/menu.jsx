import React from 'react';

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f1e5] to-[#e8d5b5] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Textura sutil de mármol */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')]"></div>
      
      {/* Contenedor principal con efecto de tarjeta gourmet */}
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-[#e8d5b5]/50 relative z-10">
        {/* Encabezado con degradado */}
        <div className="bg-gradient-to-r from-[#5a3928] to-[#3a1d1a] text-white py-6 px-8 text-center">
          <h1 className="text-4xl font-bold font-serif tracking-wider">MENÚ</h1>
          <div className="w-24 h-1 bg-[#e8d5b5] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Contenido del menú */}
        <div className="p-8">
          {/* Sección Desayunos */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold font-serif text-[#3a1d1a]">DESAYUNOS</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-[#e8d5b5] to-transparent"></div>
            </div>
            
            <ul className="space-y-4">
              {breakfastItems.map((item, index) => (
                <MenuItem key={index} name={item.name} price={item.price} />
              ))}
            </ul>
          </div>

          {/* Separador decorativo */}
          <div className="flex justify-center my-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e8d5b5] to-transparent"></div>
          </div>

          {/* Sección Catering */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold font-serif text-[#3a1d1a]">CATERING</h2>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-[#e8d5b5] to-transparent"></div>
            </div>
            
            <p className="text-[#5a3928] italic mb-6 font-serif">Platillos a la Carta</p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#e8d5b5]">
                    <th className="text-left pb-4 text-lg font-serif text-[#3a1d1a]">ALMUERZOS</th>
                    <th className="text-right pb-4 text-lg font-serif text-[#3a1d1a]">PRECIO</th>
                  </tr>
                </thead>
                <tbody>
                  {lunchItems.map((item, index) => (
                    <tr key={index} className="border-b border-[#f0e6d9] hover:bg-[#f8f1e5]/50 transition">
                      <td className="py-3 text-[#5a3928] font-medium">{item.name}</td>
                      <td className="py-3 text-right font-bold text-[#8c5e3c]">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="bg-gradient-to-r from-[#f8f1e5] to-[#e8d5b5] text-center py-4 text-sm text-[#5a3928] border-t border-[#e8d5b5]/50">
          Market Restaurante • Calle Río Coca y Río Cutuchi • Sector UTA Huachi
        </div>
      </div>
    </div>
  );
};

// Componente reutilizable para ítems del menú
const MenuItem = ({ name, price }) => (
  <li className="flex justify-between py-2 border-b border-[#f0e6d9]/50 hover:bg-[#f8f1e5]/30 transition px-2 rounded">
    <span className="text-[#5a3928] font-medium">{name}</span>
    <span className="text-[#8c5e3c] font-bold">{price}</span>
  </li>
);

// Datos del menú
const breakfastItems = [
  { name: "Desayuno Continental", price: "$1.75" },
  { name: "Desayuno Completo", price: "$2.50" },
  { name: "Desayuno Americano", price: "$2.50" },
  { name: "Tigrillo", price: "$1.75" },
  { name: "Tigrillo Mixto", price: "$3.00" },
  { name: "Bolón", price: "$1.50" },
  { name: "Bolón Mixto", price: "$2.00" }
];

const lunchItems = [
  { name: "Guatita", price: "$2.00" },
  { name: "Chuleta", price: "$3.00" },
  { name: "Seco de Pollo", price: "$2.00" },
  { name: "Seco de Carne", price: "$2.50" },
  { name: "Seco de Chivo", price: "$3.00" },
  { name: "Pollo Asado", price: "$2.50" },
  { name: "Corvina Apanada", price: "$3.00" },
  { name: "Carne Apanada", price: "$3.00" },
  { name: "Pollo Asado", price: "$2.50" }
];

export default Menu;