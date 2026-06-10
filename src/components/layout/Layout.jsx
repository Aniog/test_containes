import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Layout = ({ children }) => {
  const mainRef = useRef(null)

  useEffect(() => {
    // Load Strikingly stock images for any data-strk-img / data-strk-bg elements
    const cleanup = ImageHelper.loadImages(strkImgConfig, mainRef.current)
    return cleanup
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
