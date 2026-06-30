import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-charcoal z-50 transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-pearl/10">
            <h2 className="font-serif text-lg tracking-[0.15em] text-cream font-light uppercase">
              Your Bag
            </h2>
            <button
              onClick={closeCart}
              className="text-cream/50 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-warm-gray font-light text-sm">Your bag is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-6 text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors font-sans"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-warm-black rounded flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-warm-black flex items-center justify-center">
                        <span className="text-gold/30 font-serif text-xs">{item.name.charAt(0)}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.1em] text-cream uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-gray mt-1">{item.variant}</p>
                      <p className="text-sm text-gold mt-2 font-light">${item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="text-cream/50 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-cream font-light w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="text-cream/50 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-warm-gray hover:text-gold transition-colors uppercase tracking-wider"
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
            <div className="px-6 py-6 border-t border-pearl/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.15em] uppercase text-cream/50 font-sans">Subtotal</span>
                <span className="text-lg font-serif text-cream">${total}</span>
              </div>
              <button className="w-full bg-gold text-charcoal text-xs tracking-[0.15em] uppercase font-sans font-medium py-4 hover:bg-gold-light transition-colors duration-300">
                Checkout
              </button>
              <p className="text-xs text-warm-gray/50 text-center mt-3 font-light">
                Free shipping on orders over $75
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
