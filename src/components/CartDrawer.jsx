import { useEffect } from "react"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Link } from "react-router-dom"

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalItems, totalPrice, removeItem, updateQuantity } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-muted" />
              <span className="text-sm font-medium text-muted">Cart ({totalItems})</span>
            </div>
            <button onClick={closeCart} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-muted-light mb-3" />
                <p className="font-serif text-xl text-muted mb-1">Your cart is empty</p>
                <p className="text-sm text-muted-light mb-6">Add some treasures to begin</p>
                <button
                  onClick={closeCart}
                  className="uppercase tracking-widest text-xs font-medium text-gold border border-gold px-8 py-3 hover:bg-gold hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-border/50 last:border-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm uppercase tracking-[0.08em] truncate">{item.name}</p>
                      <p className="text-xs text-muted-light mt-0.5 capitalize">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 border border-border rounded-sm hover:border-muted-light transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 border border-border rounded-sm hover:border-muted-light transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-muted-light hover:text-foreground transition-colors"
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
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-light">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-gold text-white uppercase tracking-widest text-xs font-medium px-8 py-3 hover:bg-gold-hover transition-colors">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs text-muted hover:text-foreground transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}