import { Minus, Plus, X, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, count, updateQty, removeFromCart } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-surface z-[70] shadow-2xl transform transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-[0.12em] uppercase">Your Bag</h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 -mr-2 text-velmora-muted hover:text-velmora-text transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
                <p className="font-serif text-lg text-velmora-text">Your bag is empty</p>
                <p className="text-sm text-velmora-muted mt-1">
                  Discover something treasured.
                </p>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-bg border border-velmora-border flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-sm tracking-[0.1em] uppercase">
                            {item.name}
                          </p>
                          <p className="text-xs text-velmora-muted mt-0.5">
                            Tone: {item.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-velmora-muted hover:text-red-600 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.variant, item.qty - 1)}
                            className="p-2 hover:bg-velmora-bg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.variant, item.qty + 1)}
                            className="p-2 hover:bg-velmora-bg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full py-3.5 bg-velmora-accent text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-accent-hover transition-colors"
              >
                Checkout · {count} item{count !== 1 ? 's' : ''}
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full py-3 border border-velmora-text text-velmora-text font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-text hover:text-velmora-bg transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
