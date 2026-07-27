import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout({ children }) {
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
    <div className="min-h-screen bg-brand-mist text-brand-ink">
      <Header />
      <main ref={containerRef}>{children}</main>
      <Footer />
    </div>
  )
}
