import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { cn } from "../../lib/utils"

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[420px] bg-cream shadow-2xl flex flex-col transition-transform duration-300",
          open ? "translate-x-0 cart-slide-in" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-dark-ivory">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal/60" />
            <span className="text-sm font-medium text-charcoal">
              Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-charcoal/50 hover:text-charcoal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal/20 mb-4" />
              <p className="text-sm text-charcoal/50 mb-1">Your cart is empty</p>
              <p className="text-xs text-charcoal/40 mb-6">
                Discover pieces you&apos;ll treasure
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="text-xs uppercase tracking-[0.12em] text-warm-gold border border-warm-gold px-6 py-2.5 hover:bg-warm-gold hover:text-dark-charcoal transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 pb-5 border-b border-dark-ivory/50 last:border-0"
                >
                  <div className="w-20 h-20 bg-ivory rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-charcoal/50 mt-0.5 capitalize">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-dark-ivory">
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          className="px-2 py-1 text-charcoal/60 hover:text-charcoal transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-xs font-medium text-charcoal border-x border-dark-ivory">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className="px-2 py-1 text-charcoal/60 hover:text-charcoal transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-charcoal/40 hover:text-dusty-rose transition-colors"
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
          <div className="border-t border-dark-ivory px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal/60">Subtotal</span>
              <span className="text-lg font-medium text-charcoal font-serif">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-charcoal/40">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-dark-charcoal text-ivory text-xs uppercase tracking-[0.12em] py-3.5 hover:bg-charcoal transition-colors">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
            <button
              onClick={onClose}
              className="w-full text-xs uppercase tracking-[0.12em] text-charcoal/60 py-2 hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}