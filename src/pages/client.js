"use client";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MyButton from './page.js';
import AboutPage from './about.js';

const router = createHashRouter([
  {
    path: '/',
    element: <MyButton />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export default function ClientRouter() {
  return <RouterProvider router={router} />;
}