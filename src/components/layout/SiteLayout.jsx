import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import CartDrawer from '../cart/CartDrawer'

export default function SiteLayout() {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  })

  return (
    <div ref={pageRef} className="min-h-screen bg-velmora-parchment text-velmora-ink">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
