import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'

import SiteHeader from '@/components/site/SiteHeader'
import SiteFooter from '@/components/site/SiteFooter'
import CtaBanner from '@/components/site/CtaBanner'
import strkImgConfig from '@/strk-img-config.json'

const routeTitles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'China Sourcing Services | SSourcing China',
  '/how-it-works': 'How China Sourcing Works | SSourcing China',
  '/products': 'Products We Source in China | SSourcing China',
  '/case-studies': 'China Sourcing Case Studies | SSourcing China',
  '/blog': 'China Sourcing Blog | SSourcing China',
  '/contact': 'Contact SSourcing China | Get a Free Sourcing Quote',
}

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.title = routeTitles[location.pathname] || 'SSourcing China'
  }, [location.pathname])

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-brand-ink">
      <SiteHeader />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      {location.pathname === '/contact' ? null : <CtaBanner />}
      <SiteFooter />
    </div>
  )
}

export default Layout
