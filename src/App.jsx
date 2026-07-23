import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './Layout'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Collection = lazy(() => import('./pages/Collection'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center">
        <p className="font-serif text-2xl text-charcoal tracking-widest-xl">VELMORA</p>
        <div className="mt-4 w-8 h-[1px] bg-gold mx-auto animate-pulse" />
      </div>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
