import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  const mainRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (mainRef.current) {
        ImageHelper.loadImages(strkImgConfig, mainRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollToTop />
      <Navbar />
      <main ref={mainRef} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
