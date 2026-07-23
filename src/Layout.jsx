import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Layout({ children, cartCount, cartItems, onOpenCart, isCartOpen, onCloseCart, onUpdateQuantity, onRemoveFromCart }) {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header cartCount={cartCount} onOpenCart={onOpenCart} />
      {children}
      <Footer />
      <CartDrawer isOpen={isCartOpen} items={cartItems} onClose={onCloseCart} onUpdateQuantity={onUpdateQuantity} onRemove={onRemoveFromCart} />
    </div>
  )
}
