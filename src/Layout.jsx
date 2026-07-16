import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout({ children }) {
  const layoutRef = useRef(null)

  useEffect(() => {
    if (layoutRef.current) {
      return ImageHelper.loadImages(strkImgConfig, layoutRef.current)
    }
  }, [])

  return (
    <div ref={layoutRef} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
