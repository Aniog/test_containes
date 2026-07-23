import React, { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isDrawerOpen, closeDrawer } = useCart()

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeDrawer()
    }
    if (isDrawerOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen, closeDrawer])

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 animate-slide-in"
      >
        <div className="flex flex-col h-full min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-border flex-shrink-0">
            <h2 className="font-serif text-lg uppercase tracking-product text-foreground">Your Bag</h2>
            <button
              onClick={closeDrawer}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-2"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="font-serif text-lg text-foreground">Your bag is empty</p>
                <p className="font-sans text-sm text-muted-foreground mt-2">Discover something beautiful to add.</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-6 font-sans text-xs uppercase tracking-nav text-primary hover:text-muted-gold transition-colors duration-300 border border-primary px-6 py-2"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-dark-gray rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <span className="font-serif text-xs uppercase tracking-product text-primary/60 text-center leading-tight px-1">
                        {item.name}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-product text-foreground">{item.name}</h3>
                      <p className="font-sans text-xs text-muted-foreground mt-1">Tone: {item.tone}</p>
                      <p className="font-sans text-sm font-medium text-primary mt-2">${item.price}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="w-6 h-6 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="w-6 h-6 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id, item.tone)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 self-start p-1"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-4 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-muted-foreground">Subtotal</span>
                <span className="font-sans text-lg font-medium text-foreground">${totalPrice}</span>
              </div>
              <p className="font-sans text-xs text-muted-foreground mb-4">Shipping calculated at checkout</p>
              <button className="w-full bg-primary text-primary-foreground font-sans text-xs uppercase tracking-nav py-3 hover:bg-muted-gold transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
