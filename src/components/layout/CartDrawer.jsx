import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice, cn } from '../../lib/utils'

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      return () => document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, closeCart])

  return (
    <div ref={containerRef} className={cn("fixed inset-0 z-[100]", !isOpen && "pointer-events-none invisible")} role="dialog" aria-modal={isOpen} aria-label="Shopping cart">
      {/* Overlay */}
      <div
        className={cn("absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-lg tracking-wide text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-charcoal/60 hover:text-charcoal transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-charcoal/15 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal/40 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal/30">Discover our curated collection</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-divider/60 last:border-0 last:pb-0"
                >
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-cream rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-product-name text-[13px] text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-divider rounded flex items-center justify-center text-charcoal/50 hover:border-charcoal/30 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-charcoal w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-divider rounded flex items-center justify-center text-charcoal/50 hover:border-charcoal/30 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-warm-gray-light hover:text-charcoal underline transition-colors"
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
          <div className="border-t border-divider px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-charcoal tracking-wide">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-warm-gray-light">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-accent w-full text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
