import { Link } from 'react-router-dom'
import { Lock, Minus, Plus, ShoppingBag, Truck, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { FREE_SHIPPING_THRESHOLD, formatPrice } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const VARIANT_LABELS = { gold: '18K Gold', silver: 'Silver' }

const getCartImage = (productId) => {
  const entry = strkImgConfig?.[`card-a-${productId}`]
  const picked = entry?.results?.find((r) => r.id === entry.picked) ?? entry?.results?.[0]
  return picked?.url ?? ''
}

export default function CartDrawer() {
  const { items, count, subtotal, isCartOpen, closeCart, setQuantity, removeItem } = useCart()

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <div
      className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-400 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-[0_24px_60px_-24px_rgba(34,27,20,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-[0.18em] text-ink">
            Your Cart <span className="text-ink-muted">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold-deep"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand">
              <ShoppingBag className="h-7 w-7 text-gold-deep" strokeWidth={1.25} />
            </span>
            <div>
              <p className="font-serif text-2xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Discover demi-fine pieces crafted to be treasured every day.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep"
            >
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="border-b border-line px-6 py-4">
              <p className="flex items-center gap-2 text-xs text-ink-soft">
                <Truck className="h-4 w-4 text-gold-deep" strokeWidth={1.5} />
                {remaining > 0 ? (
                  <span>
                    You’re <strong className="font-semibold">{formatPrice(remaining)}</strong> away from a
                    complimentary jewelry pouch
                  </span>
                ) : (
                  <span>Your order ships free — worldwide, beautifully boxed.</span>
                )}
              </p>
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-sand-deep">
                <div
                  className="h-full rounded-full bg-gold-deep transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={`${item.productId}-${item.variant}`} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-sand"
                  >
                    <img
                      src={getCartImage(item.productId)}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-sm uppercase leading-snug tracking-[0.12em] text-ink transition-colors hover:text-gold-deep"
                        id={`cart-name-${item.productId}-${item.variant}`}
                      >
                        {item.product.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-ink-muted transition-colors hover:text-ink"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {VARIANT_LABELS[item.variant]}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:bg-sand"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(item.productId, item.variant, item.quantity - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:bg-sand"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(item.productId, item.variant, item.quantity + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-ink">{formatPrice(item.lineTotal)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-ink-muted">
                Free worldwide shipping · 30-day returns · taxes calculated at checkout
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-13 w-full items-center justify-center gap-2 bg-gold-deep py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
              >
                <Lock className="h-4 w-4" strokeWidth={1.5} />
                Secure checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted transition-colors hover:text-gold-deep"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
