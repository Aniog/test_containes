import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-[70] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[80] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl font-light text-charcoal">Your Cart</h2>
          <button onClick={closeCart} className="text-charcoal hover:text-accent transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted mt-2">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 bg-accent text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-accent-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-border last:border-0">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-surface flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted text-center px-1">{item.name}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product uppercase text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-muted hover:text-charcoal transition-colors self-start"
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
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted">Shipping calculated at checkout</p>
            <button className="w-full bg-accent text-white py-3.5 text-xs tracking-widest uppercase hover:bg-accent-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
