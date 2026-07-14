import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { getStrkImageUrl } from '@/lib/strk-image'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/40">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Cart{' '}
            <span className="text-muted text-base">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-charcoal hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
              <ShoppingBag className="w-10 h-10 text-champagne" strokeWidth={1} />
              <p className="font-serif text-xl text-ink">Your cart is empty</p>
              <p className="text-sm text-muted max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      src={getStrkImageUrl(item.imgId)}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-sand rounded-sm"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="block font-serif text-base uppercase tracking-[0.15em] text-ink hover:text-gold transition-colors truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5">{item.tone}</p>
                    <p className="text-sm text-charcoal mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-champagne/60 rounded-sm">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-charcoal hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-charcoal hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-xs uppercase tracking-wider text-muted hover:text-gold-deep transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-champagne/40 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-charcoal">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold text-ink py-3.5 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-cream transition-colors"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
