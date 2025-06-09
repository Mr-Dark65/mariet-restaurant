import React from 'react';
import { createHashRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Nosotros from '../features/Nosotros/nosotros';
import ContactHeader from '../features/Contact-Header/contactheader';
import Menu from '../features/Menu/menu';

export const router = createHashRouter([
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