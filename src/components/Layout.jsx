import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  useEffect(() => {
    if (!containerRef.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return typeof cleanup === 'function' ? cleanup : undefined
  }, [pathname])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white text-brand-ink">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
