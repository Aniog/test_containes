import { Outlet } from 'react-router-dom'
import CartDrawer from './components/layout/CartDrawer'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

export default function Layout({ cart }) {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header cartCount={cart.totals.count} onOpenCart={cart.openCart} />
      <Outlet />
      <Footer />
      <CartDrawer
        isOpen={cart.isCartOpen}
        items={cart.items}
        subtotal={cart.totals.subtotal}
        onClose={cart.closeCart}
        onRemove={cart.removeItem}
        onUpdateQuantity={cart.updateQuantity}
      />
    </div>
  )
}
