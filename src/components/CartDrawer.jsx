import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-[60] animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] animate-slide-in-right shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Bag ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal-400 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" />
              <p className="font-serif text-lg text-charcoal-500 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-300 mb-6">Looks like you haven't added any treasures yet.</p>
              <Link
                to="/collection"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-charcoal-50 rounded overflow-hidden flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-thumb-${item.id}`}
                      data-strk-img={`[${item.titleId}] jewelry product photo`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.2'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs font-medium tracking-wider uppercase text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 mt-1">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-charcoal-200 rounded flex items-center justify-center text-charcoal-400 hover:text-charcoal hover:border-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-charcoal-200 rounded flex items-center justify-center text-charcoal-400 hover:text-charcoal hover:border-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-charcoal-300 hover:text-charcoal underline transition-colors"
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
          <div className="px-6 py-5 border-t border-charcoal-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-charcoal-500 tracking-wide uppercase">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-charcoal-300">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full justify-center">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs text-charcoal-400 hover:text-charcoal tracking-wider uppercase transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
