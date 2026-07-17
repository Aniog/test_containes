import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/shared/Layout'
import { Homepage } from './pages/Home'
import { ShopPage } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const ImageLoader = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    // A bit hacky to put on body, but ensures images load on route change
    // Using a microtask/timeout helps ensure DOM is updated
    const timeout = setTimeout(() => {
      ImageHelper.loadImages(strkImgConfig, document.body)
    }, 100)
    return () => clearTimeout(timeout)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <ImageLoader />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
