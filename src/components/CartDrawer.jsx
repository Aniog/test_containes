import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden={!drawerOpen}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-400 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
        inert={!drawerOpen ? "true" : undefined}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-hairline">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} className="text-charcoal" />
              <span className="text-sm tracking-wider uppercase text-charcoal">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={closeDrawer} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-muted mb-4" />
                <p className="text-taupe font-serif text-lg mb-2">Your cart is empty</p>
                <p className="text-muted text-sm mb-6">Add some pieces to get started.</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="inline-block bg-gold text-white uppercase tracking-widest text-sm px-8 py-3 hover:bg-gold-hover transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-hairline last:border-0">
                    <div className="w-20 h-20 bg-hairline/40 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-product-name text-xs mb-1 text-charcoal">{item.name}</h3>
                      <p className="text-xs text-muted mb-1">{item.variant}</p>
                      <p className="text-sm font-medium text-charcoal">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-hairline">
                          <button
                            className="p-1.5 hover:bg-hairline/40 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:bg-hairline/40 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          className="text-xs text-muted hover:text-charcoal underline transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-hairline px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-charcoal">Subtotal</span>
                <span className="text-lg font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">Shipping calculated at checkout</p>
              <button className="w-full bg-charcoal text-white uppercase tracking-widest text-sm py-3.5 hover:bg-charcoal/90 transition-all duration-300">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-sm text-taupe hover:text-charcoal transition-colors underline underline-offset-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}