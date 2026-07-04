import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-surface shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-surface-warm transition-colors" aria-label="Close cart">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
            <ShoppingBag className="w-12 h-12 text-muted" strokeWidth={1} />
            <p className="font-serif text-lg text-muted">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-accent text-white px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-surface-warm flex-shrink-0 overflow-hidden">
                    <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-sm uppercase tracking-ultra-wide text-foreground hover:text-accent transition-colors truncate"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-muted hover:text-foreground transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted mt-1">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-surface-warm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-surface-warm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-divider px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-muted uppercase tracking-[0.1em]">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-accent text-white py-4 font-sans text-xs uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block w-full text-center border border-foreground text-foreground py-3.5 font-sans text-xs uppercase tracking-[0.15em] hover:bg-foreground hover:text-white transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
