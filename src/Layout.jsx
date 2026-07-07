import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import { useImageLoader } from '@/lib/useImageLoader'

export default function Layout({ cartItems, cartOpen, setCartOpen, updateQuantity, removeFromCart }) {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const containerRef = useImageLoader([cartOpen, cartItems.length, cartCount])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Outlet />
      <Footer />
      <CartDrawer
        cartItems={cartItems}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={updateQuantity}
      />
    </div>
  )
}
