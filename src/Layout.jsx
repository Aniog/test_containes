import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Layout() {
  const layoutRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, layoutRef.current)
  }, [])

  return (
    <div ref={layoutRef} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}