import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/data/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isDrawerOpen, closeDrawer } = useCart()

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-deepCharcoal/40 z-50 transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-warmCream z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-divider">
          <h2 className="font-serif text-lg tracking-[0.15em] uppercase font-medium text-textDark">
            Your Cart
          </h2>
          <button onClick={closeDrawer} className="text-textMuted hover:text-textDark transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-textMuted mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-textDark">Your cart is empty</p>
              <p className="font-sans text-sm text-textMuted mt-2">Discover something beautiful to add.</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-6 font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal px-8 py-3 rounded-sm hover:bg-goldLight transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-24 bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs tracking-[0.1em] uppercase text-gold/60">{item.name.split(' ')[0]}</span>
                  </div>
                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <h3 id={item.titleId} className="font-serif text-sm tracking-[0.15em] uppercase font-medium text-textDark truncate">
                      {item.name}
                    </h3>
                    <p id={item.descId} className="font-sans text-xs text-textMuted mt-1">
                      {item.variant} tone
                    </p>
                    <p className="font-sans text-sm font-medium text-textDark mt-2">
                      ${item.price}
                    </p>
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-divider rounded-sm flex items-center justify-center text-textMuted hover:text-textDark hover:border-textMuted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                      <span className="font-sans text-sm font-medium text-textDark w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-divider rounded-sm flex items-center justify-center text-textMuted hover:text-textDark hover:border-textMuted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto font-sans text-xs text-textMuted hover:text-error transition-colors"
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
          <div className="border-t border-divider px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm tracking-wide text-textMuted">Subtotal</span>
              <span className="font-sans text-lg font-medium text-textDark">${totalPrice}</span>
            </div>
            <p className="font-sans text-xs text-textMuted mb-4">Shipping calculated at checkout.</p>
            <button
              className="w-full font-sans text-sm tracking-[0.1em] uppercase font-medium bg-gold text-deepCharcoal py-3 rounded-sm hover:bg-goldLight transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
