import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

// Placeholder pages
const Collections = () => <div className="pt-48 p-12 text-center min-h-screen">Collections Page Coming Soon</div>
const About = () => <div className="pt-48 p-12 text-center min-h-screen">About Page Coming Soon</div>
const Journal = () => <div className="pt-48 p-12 text-center min-h-screen">Journal Page Coming Soon</div>

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'collections', element: <Collections /> },
      { path: 'about', element: <About /> },
      { path: 'journal', element: <Journal /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
