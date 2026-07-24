import { useEffect, useMemo, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import strkImgConfig from '@/strk-img-config.json'

const StorefrontLayout = ({
  cartOpen,
  setCartOpen,
  cartItems,
  cartCount,
  subtotal,
  onDecrease,
  onIncrease,
  onRemove,
}) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [hasScrolled, setHasScrolled] = useState(!isHome)
  const [mobileOpen, setMobileOpen] = useState(false)
  const containerRef = useRef(null)
  const cartSignature = useMemo(
    () => cartItems.map((item) => `${item.slug}-${item.tone}-${item.quantity}`).join('|'),
    [cartItems],
  )

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(!isHome || window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [location.pathname, cartOpen, cartSignature])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f7f2ea] text-[#241a13]">
      <Header
        scrolled={hasScrolled}
        cartCount={cartCount}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((current) => !current)}
        onOpenCart={() => setCartOpen(true)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        onRemove={onRemove}
      />
    </div>
  )
}

export default StorefrontLayout
