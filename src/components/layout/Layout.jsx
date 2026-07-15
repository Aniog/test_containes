import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout({ children, cartItems, cartCount, cartOpen, onCartOpen, onCartClose, onRemove, onUpdateQuantity }) {
  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={onCartOpen} />
      {children}
      <Footer />
      <CartDrawer
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={onCartClose}
        onRemove={onRemove}
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  )
}
