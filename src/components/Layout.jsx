import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Navbar from './Navbar'
import Footer from './Footer'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout() {
  const { pathname } = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  useEffect(() => {
    let cleanup
    const frame = requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      cancelAnimationFrame(frame)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [pathname])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
