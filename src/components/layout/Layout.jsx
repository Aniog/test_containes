import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Navbar } from './Navbar'
import { CartDrawer } from './CartDrawer'
import { Footer } from './Footer'

export function Layout({ children }) {
  const mainRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, mainRef.current)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
      <Navbar />
      <CartDrawer />
      <main ref={mainRef} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
