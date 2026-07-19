import { Outlet } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = ({ cartItems, cartCount, cartOpen, setCartOpen, updateQuantity, removeFromCart }) => (
  <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
    <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
    <Outlet />
    <Footer />
    <CartDrawer
      isOpen={cartOpen}
      onClose={() => setCartOpen(false)}
      items={cartItems}
      onUpdateQuantity={updateQuantity}
      onRemove={removeFromCart}
    />
  </div>
)

export default Layout
