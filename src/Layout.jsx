import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import PreviewRouteBridge from '@/components/site/PreviewRouteBridge'
import SeoManager from '@/components/site/SeoManager'
import strkImgConfig from '@/strk-img-config.json'

function Layout() {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" ref={containerRef}>
      <PreviewRouteBridge />
      <SeoManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
