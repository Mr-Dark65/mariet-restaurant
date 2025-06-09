import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../features/Navbar/navbar';
import Footer from '../features/Footer/footer';

function RootLayout() {
  return (
    <div className="font-sans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout; 