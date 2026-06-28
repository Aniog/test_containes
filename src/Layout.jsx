import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import strkImgConfig from '@/strk-img-config.json'

const titles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'Services | China Sourcing Agent | SSourcing China',
  '/how-it-works': 'How It Works | China Sourcing Agent | SSourcing China',
  '/products': 'Products We Source | China Sourcing Agent | SSourcing China',
  '/case-studies': 'Case Studies | China Sourcing Agent | SSourcing China',
  '/blog': 'Blog | China Sourcing Agent | SSourcing China',
  '/contact': 'Contact | China Sourcing Agent | SSourcing China',
}

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    document.title =
      titles[location.pathname] ||
      'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const previewNavigate = (to, options = {}) => navigate(to, options)

    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = previewNavigate

    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === previewNavigate) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      }
    }
  }, [navigate])

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
    <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default Layout
