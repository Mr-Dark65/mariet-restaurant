import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Nosotros from '../features/Nosotros/nosotros';
import ContactHeader from '../features/Contact-Header/contactheader';
import Menu from '../features/Menu/menu';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'nosotros',
        element: <Nosotros />,
      },
      {
        path: 'contactanos',
        element: <ContactHeader />,
      },
      {
        path: 'menu',
        element: <Menu/>
      }
    ],
  },
]); 