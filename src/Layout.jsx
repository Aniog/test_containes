import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import strkImgConfig from './strk-img-config.json'

const Layout = () => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
