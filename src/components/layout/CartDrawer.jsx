import React, { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-brand-cream shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm-border/60">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-brand-charcoal" />
            <h2 className="font-serif text-xl tracking-wide text-brand-charcoal">Your Bag</h2>
            {totalItems > 0 && (
              <span className="text-[11px] text-brand-warm-gray font-sans">({totalItems})</span>
            )}
          </div>
          <button onClick={closeCart} className="p-1 text-brand-warm-gray hover:text-brand-charcoal transition-colors duration-300" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-brand-warm-border mb-4" />
              <p className="text-brand-warm-gray font-serif text-lg">Your bag is empty</p>
              <p className="text-sm text-brand-warm-gray-light mt-2">Discover our collection and find something you love.</p>
              <button onClick={closeCart} className="btn-outline mt-6 text-xs">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-0">
              {items.map((item, index) => (
                <div key={item.key} className={`flex gap-4 py-5 ${index > 0 ? 'border-t border-brand-warm-border/40' : ''}`}>
                  {/* Thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 bg-brand-sand/60 overflow-hidden flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-brand-warm-border" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-[13px] text-brand-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-brand-warm-gray mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="flex items-center border border-brand-warm-border/60">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-brand-warm-gray hover:text-brand-charcoal transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium w-6 text-center text-brand-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-brand-warm-gray hover:text-brand-charcoal transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] text-brand-warm-gray-light hover:text-brand-charcoal transition-colors duration-200 tracking-wide uppercase"
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
          <div className="border-t border-brand-warm-border/60 px-6 py-5 bg-brand-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-brand-warm-gray">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-brand-warm-gray-light mb-5 tracking-wide">Shipping calculated at checkout</p>
            <button className="btn-accent w-full text-xs py-4 flex items-center justify-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
