import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { resolveImageUrl } from '@/lib/resolveImage'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-ink/50 animate-overlay-in" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-card flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-ink">
            Your Cart {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold transition-colors">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} strokeWidth={1} className="text-sand" />
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone max-w-xs">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-2 bg-gold text-ink px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-deep hover:text-ivory transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-sand">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4 py-5">
                    <Link to={`/product/${item.slug}`} onClick={closeCart} className="shrink-0">
                      <div className="relative h-20 w-20 overflow-hidden bg-sand">
                        <img
                          alt={item.name}
                          src={resolveImageUrl(item.imgId)}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="block font-serif text-base text-charcoal uppercase tracking-[0.12em] hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.variant && (
                        <p className="text-xs text-stone mt-0.5">Tone: {item.variant}</p>
                      )}
                      <p className="text-sm text-charcoal mt-1">{formatPrice(item.price)}</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-sand">
                          <button
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={1.5} />
                          </button>
                          <span className="px-3 text-sm text-charcoal min-w-[2ch] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.lineId)}
                          className="text-xs uppercase tracking-wider text-stone hover:text-gold transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.15em] text-stone">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-ink py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-deep hover:text-ivory transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
