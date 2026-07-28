import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import strkImgConfig from '@/strk-img-config.json'

const Layout = ({ children }) => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-mist text-brand-navy">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
