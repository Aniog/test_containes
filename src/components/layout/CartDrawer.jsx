import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, toggleCart } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') toggleCart(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      return () => document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, toggleCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleCart(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-cream-50 z-[80] shadow-luxury-xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200/30">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
              <h2 className="heading-sm text-charcoal">Your Cart</h2>
              {totalItems > 0 && (
                <span className="text-xs text-charcoal-400 font-sans">
                  ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </span>
              )}
            </div>
            <button
              onClick={() => toggleCart(false)}
              className="text-charcoal hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" strokeWidth={1} />
                <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
                <p className="text-charcoal-400 text-sm">
                  Discover our collection of fine jewelry
                </p>
                <button
                  onClick={() => toggleCart(false)}
                  className="btn-outline mt-6 text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-charcoal-100/50 last:border-0"
                  >
                    {/* Product image */}
                    <div className="w-20 h-20 bg-cream-200 flex-shrink-0 overflow-hidden">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-cream-300" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-charcoal truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal-400 mt-0.5 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="price text-sm text-charcoal mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-charcoal-200 flex items-center justify-center text-charcoal-400 hover:text-charcoal hover:border-charcoal-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-charcoal w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-charcoal-200 flex items-center justify-center text-charcoal-400 hover:text-charcoal hover:border-charcoal-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>

                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-charcoal-400 underline hover:text-charcoal transition-colors"
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
            <div className="px-6 py-5 border-t border-charcoal-200/30 bg-cream-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-charcoal-400">Subtotal</span>
                <span className="price text-charcoal">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-charcoal-400">Shipping</span>
                <span className="text-sm text-charcoal">Free</span>
              </div>
              <div className="h-px bg-charcoal-200/30 mb-4" />
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-lg text-charcoal">Total</span>
                <span className="font-serif text-xl text-charcoal">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-charcoal-400 mt-3">
                Free worldwide shipping · 30-day returns
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
