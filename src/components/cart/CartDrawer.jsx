import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Bag</h2>
          <button onClick={closeDrawer} className="text-warm-600 hover:text-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-warm-500 text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-xs tracking-wide-2 uppercase font-medium text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 bg-warm-100 flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}-${item.tone}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-500 mt-1">{item.tone}</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 border border-warm-200 flex items-center justify-center text-warm-600 hover:border-gold hover:text-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 border border-warm-200 flex items-center justify-center text-warm-600 hover:border-gold hover:text-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-warm-400 hover:text-charcoal underline transition-colors"
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
          <div className="border-t border-warm-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-warm-600">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-charcoal text-xs tracking-wide-2 uppercase font-semibold py-3 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full mt-2 text-xs tracking-wide-2 uppercase font-medium text-warm-600 hover:text-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
