import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-obsidian/50 z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-stone-50 z-50 shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button onClick={closeCart} className="p-1 hover:opacity-70 transition-opacity" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
                <p className="font-serif text-xl text-ink-light mb-2">Your cart is empty</p>
                <p className="text-sm text-ink-muted">Discover our collection and find your next treasure.</p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-8 py-3 bg-obsidian text-cream text-xs uppercase tracking-[0.15em] font-medium hover:bg-charcoal transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-stone-200/60 last:border-0">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-stone-100 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gold/20" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="font-serif text-sm uppercase tracking-wider text-ink font-medium truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-ink-muted mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-ink-muted hover:text-ink transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-stone-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2.5 py-1 hover:bg-stone-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2.5 py-1 hover:bg-stone-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-ink">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-ink-light">Subtotal</span>
                <span className="font-serif text-lg tracking-wide">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-ink-muted">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3.5 bg-obsidian text-cream text-xs uppercase tracking-[0.15em] font-medium hover:bg-charcoal transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border border-stone-300 text-ink text-xs uppercase tracking-[0.15em] font-medium hover:bg-stone-100 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
