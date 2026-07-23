import { Outlet } from 'react-router-dom'
import CartDrawer from './CartDrawer'
import HashScrollManager from './HashScrollManager'
import PreviewRouteBridge from './PreviewRouteBridge'
import StoreFooter from './StoreFooter'
import StoreHeader from './StoreHeader'

export default function StoreLayout({
  cartCount,
  isCartOpen,
  cartItems,
  cartSubtotal,
  onOpenCart,
  onCloseCart,
  onRemoveFromCart,
  onUpdateQuantity,
}) {
  return (
    <div className="page-shell min-h-screen">
      <PreviewRouteBridge />
      <HashScrollManager />
      <StoreHeader cartCount={cartCount} onOpenCart={onOpenCart} />
      <Outlet />
      <StoreFooter />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={onCloseCart}
        cartItems={cartItems}
        cartSubtotal={cartSubtotal}
        onRemove={onRemoveFromCart}
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  )
}
