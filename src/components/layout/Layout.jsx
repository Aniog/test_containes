import CartDrawer from './CartDrawer'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, cartItems, cartCount, isCartOpen, onCartOpen, onCartClose, onRemove, onUpdateQuantity }) => {
  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={onCartOpen} />
      {children}
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={onCartClose}
        onRemove={onRemove}
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  )
}

export default Layout
