import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { getStrkImageUrl } from '@/lib/strk-images'

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] animate-overlay-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-soft-lg animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-champagne transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag className="w-10 h-10 text-stone/40" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-stone">Discover pieces made to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 text-[11px] uppercase tracking-[0.2em] font-medium text-ink border border-ink/30 px-8 py-3.5 hover:bg-ink hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div
                key={item.lineId}
                className="flex gap-4 py-5 border-b border-ink/10 last:border-b-0"
              >
                <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                  <img
                    src={getStrkImageUrl(item.imgId)}
                    alt={item.name}
                    className="w-20 h-24 object-cover bg-sand"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="font-serif text-base uppercase tracking-[0.12em] text-ink hover:text-champagne transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-stone mt-1">{item.tone}</p>
                  <p className="text-sm text-ink mt-2">{formatPrice(item.price)}</p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-ink/20">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 flex items-center justify-center text-ink hover:bg-ink/5 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 flex items-center justify-center text-ink hover:bg-ink/5 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId)}
                      className="text-xs text-stone hover:text-ink transition-colors underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-ink/10 bg-sand/40">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone mb-4">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-champagne text-ink text-[11px] uppercase tracking-[0.2em] font-semibold py-4 hover:bg-gold-deep transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full mt-3 text-xs text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
