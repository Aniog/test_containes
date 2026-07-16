import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'

const Layout = ({
  children,
  cartCount,
  cartItems,
  cartOpen,
  cartTotal,
  onCloseCart,
  onOpenCart,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname, location.search])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar cartCount={cartCount} onOpenCart={onOpenCart} />
      <main>{children}</main>
      <Footer />
      <CartDrawer
        cartItems={cartItems}
        cartTotal={cartTotal}
        isOpen={cartOpen}
        onClose={onCloseCart}
        onRemoveItem={onRemoveItem}
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  )
}

export default Layout
