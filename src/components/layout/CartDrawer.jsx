import React from 'react'
import { X, Plus, Minus, Gem } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl animate-slide-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-lg font-semibold tracking-wide text-charcoal">
            Your Bag
          </h2>
          <button
            onClick={closeDrawer}
            className="text-stone-500 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-stone-500 mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-xs font-sans font-medium tracking-btn uppercase text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-gradient-to-br from-gold/20 to-gold/5 rounded flex-shrink-0 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-gold/60" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium tracking-product uppercase text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-charcoal mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-stone-300 rounded flex items-center justify-center text-stone-600 hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans font-medium text-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-stone-300 rounded flex items-center justify-center text-stone-600 hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-stone-400 hover:text-red-600 font-sans underline transition-colors"
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
          <div className="border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-stone-600">Subtotal</span>
              <span className="text-lg font-sans font-semibold text-charcoal">${total}</span>
            </div>
            <p className="text-xs text-stone-500 font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white font-sans text-xs font-medium tracking-btn uppercase py-3.5 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
