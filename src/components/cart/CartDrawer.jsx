import React, { useEffect } from 'react'
import { X, Plus, Minus, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    cartTotal,
    cartCount,
    removeFromCart,
    updateQuantity,
    closeDrawer,
  } = useCart()

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isDrawerOpen])

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 overlay-fade-in"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-cream z-50 shadow-premium-lg ${
          isDrawerOpen ? 'cart-drawer-open' : 'translate-x-full'
        }`}
        style={{ transition: isDrawerOpen ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h3
            className="font-serif text-lg tracking-wide"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bag ({cartCount})
          </h3>
          <button onClick={closeDrawer} className="p-2 hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-velmora-warm flex items-center justify-center mb-6">
              <ArrowRight size={24} className="text-velmora-gold/40 rotate-[-135deg]" />
            </div>
            <p className="text-velmora-textMuted mb-2">Your bag is empty</p>
            <p className="text-sm text-velmora-textMuted/70 mb-8">Discover our collection and find something you love.</p>
            <button
              onClick={closeDrawer}
              className="bg-velmora-deep text-velmora-cream px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-velmora-gold hover:text-velmora-deep transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 220px)' }}>
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4 py-5 border-b border-velmora-border/50 last:border-b-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-warm rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-gold/30 text-xs uppercase">Img</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm uppercase tracking-wide font-medium text-velmora-text truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-velmora-textMuted mt-1">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-velmora-warm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm min-w-[36px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-velmora-warm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-velmora-text">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-xs text-velmora-textMuted hover:text-velmora-gold transition-colors mt-2 underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border p-6 bg-velmora-cream">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm uppercase tracking-wide text-velmora-textMuted">Total</span>
                <span className="text-lg font-medium text-velmora-text">${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={closeDrawer}
                className="block w-full bg-velmora-deep text-velmora-cream text-center py-4 text-sm uppercase tracking-wider font-medium hover:bg-velmora-gold hover:text-velmora-deep transition-colors duration-300"
              >
                Checkout
              </Link>
              <button
                onClick={closeDrawer}
                className="block w-full text-center py-3 text-sm text-velmora-textMuted hover:text-velmora-gold transition-colors mt-3"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
