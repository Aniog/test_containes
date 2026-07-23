import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/data/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isDrawerOpen, closeDrawer } = useCart()

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-50 transition-opacity" onClick={closeDrawer} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-warm/30">
          <h2 className="font-serif text-lg tracking-wider uppercase">Your Bag ({totalItems})</h2>
          <button onClick={closeDrawer} className="text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-warm/50 mb-4" />
              <p className="font-serif text-lg text-velmora-text-secondary">Your bag is empty</p>
              <Link to="/shop" onClick={closeDrawer} className="mt-4 accent-button-outline px-6 py-2 text-sm rounded-none">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-warm/20">
                  {/* Product image - simple placeholder swatch */}
                  <div className="w-20 h-24 bg-velmora-sand/50 flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs tracking-wider uppercase text-velmora-gold/60 text-center leading-tight px-1">
                      {item.name.split(' ').slice(0, 2).join('\n')}
                    </span>
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-product-name text-sm text-velmora-charcoal">{item.name}</h3>
                    <p className="text-xs text-velmora-text-secondary mt-1">Tone: {item.tone}</p>
                    <p className="font-sans text-sm font-medium text-velmora-charcoal mt-2">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.key, item.quantity - 1)} className="w-6 h-6 border border-velmora-warm/50 flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.key, item.quantity + 1)} className="w-6 h-6 border border-velmora-warm/50 flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(item.key)} className="ml-2 text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors underline">
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
          <div className="px-6 py-4 border-t border-velmora-warm/30">
            <div className="flex justify-between mb-4">
              <span className="font-sans text-sm text-velmora-text-secondary">Subtotal</span>
              <span className="font-sans text-lg font-medium text-velmora-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-velmora-text-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full accent-button px-6 py-3 text-sm rounded-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
