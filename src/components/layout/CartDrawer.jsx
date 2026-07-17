import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import QuantitySelector from '@/components/storefront/QuantitySelector'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, subtotal } = useCart()
  const containerRef = useRef(null)

  useStrkImages(containerRef, [open, items.length])

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-brand-noir/55 transition ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[90] flex w-full max-w-md translate-x-0 flex-col overflow-hidden border-l border-brand-line/80 text-brand-ink shadow-luxe transition duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
        aria-label="Shopping cart"
        aria-modal="true"
        role="dialog"
      >
        <div className="absolute inset-0 bg-brand-ivory" aria-hidden="true" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-brand-line bg-brand-ivory px-5 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-brand-mist">Your Cart</p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.08em] text-brand-ink">
                Velmora Bag
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-brand-ivory transition hover:border-brand-gold/50 hover:text-brand-gold"
              aria-label="Close cart"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={containerRef} className="flex-1 overflow-y-auto bg-brand-ivory px-5 py-6">
            {items.length === 0 ? (
              <div className="rounded-[2rem] border border-brand-line bg-brand-surface p-8 text-center shadow-soft">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-mist">Your bag is empty</p>
                <p className="mt-4 text-sm leading-7 text-brand-mist">
                  Discover demi-fine favorites designed for gifting and self-purchase.
                </p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-6 inline-flex rounded-full bg-brand-gold px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-brand-noir transition hover:bg-brand-gold-soft"
                >
                  Shop Bestsellers
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    key={item.cartId}
                    className="grid grid-cols-[5.75rem,1fr] gap-4 rounded-[1.8rem] border border-brand-line bg-brand-surface p-4 shadow-soft sm:grid-cols-[6.5rem,1fr]"
                  >
                    <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.3rem] border border-brand-line bg-gradient-to-b from-brand-champagne to-brand-ivory p-3 text-brand-ink shadow-soft">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand-mist">
                        {item.selectedColor}
                      </p>
                      <div>
                        <p className="font-display text-2xl uppercase leading-none tracking-[0.12em] text-brand-ink">
                          {item.name.split(' ').slice(0, 2).join(' ')}
                        </p>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-brand-mist/90">
                          {item.material}
                        </p>
                      </div>
                    </div>

                    <div className="flex min-w-0 flex-col justify-between gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 pr-2">
                          <Link to={`/product/${item.id}`} onClick={onClose}>
                            <h3 className="font-display text-lg uppercase leading-[1.05] tracking-[0.14em] text-brand-ink transition hover:text-brand-gold sm:text-xl">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-brand-mist">
                            {item.selectedColor}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brand-mist/90">
                            {item.material}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.cartId)}
                          className="shrink-0 text-xs uppercase tracking-[0.22em] text-brand-mist transition hover:text-brand-ink"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <QuantitySelector
                          value={item.quantity}
                          onDecrease={() => updateQuantity(item.cartId, item.quantity - 1)}
                          onIncrease={() => updateQuantity(item.cartId, item.quantity + 1)}
                        />
                        <p className="text-sm font-medium text-brand-ink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-brand-line bg-brand-surface px-5 py-5">
            <div className="flex items-center justify-between text-sm text-brand-ink">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-brand-mist">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-5 w-full rounded-full bg-brand-gold px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-brand-noir transition hover:bg-brand-gold-soft"
            >
              Checkout Coming Soon
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
