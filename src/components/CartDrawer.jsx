import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-ivory z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isDrawerOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-lg tracking-wide">Your Cart</h2>
          <button
            onClick={closeDrawer}
            className="p-2 text-velmora-stone hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ height: 'calc(100vh - 220px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-sand mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-stone mb-6">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/collection"
                onClick={closeDrawer}
                className="inline-block bg-velmora-charcoal text-velmora-ivory px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-velmora-sand/50 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-warm rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xl text-velmora-gold/60 select-none">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-velmora-sand rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-velmora-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-velmora-stone hover:text-red-500 underline transition-colors"
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
          <div className="absolute bottom-0 left-0 right-0 bg-velmora-ivory border-t border-velmora-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-velmora-stone text-center mb-4">
              Free worldwide shipping · Taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-charcoal text-velmora-ivory py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
