import { Outlet, useLocation } from "react-router-dom"
import CartDrawer from "@/components/layout/CartDrawer"
import SiteFooter from "@/components/layout/SiteFooter"
import SiteHeader from "@/components/layout/SiteHeader"

const SiteLayout = ({
  cartCount,
  cartItems,
  cartSubtotal,
  isCartOpen,
  onOpenCart,
  onCloseCart,
  onUpdateCartQuantity,
  onRemoveCartItem,
}) => {
  const location = useLocation()
  const mainClassName = location.pathname === "/" ? "" : "pt-24"

  return (
    <div className="min-h-screen bg-ivory text-velvet">
      <SiteHeader cartCount={cartCount} onOpenCart={onOpenCart} />
      <main className={mainClassName}>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        subtotal={cartSubtotal}
        onClose={onCloseCart}
        onUpdateQuantity={onUpdateCartQuantity}
        onRemoveItem={onRemoveCartItem}
      />
    </div>
  )
}

export default SiteLayout
