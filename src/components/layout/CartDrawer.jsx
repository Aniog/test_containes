import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, X } from 'lucide-react'
import ProductImage from '@/components/ProductImage.jsx'
import { formatPrice } from '@/data/products.js'
import { getCartSubtotal } from '@/lib/cart.js'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer({ open, items, onClose, onQuantityChange, onRemove }) {
  const drawerRef = useRef(null)
  const subtotal = getCartSubtotal(items)

  useEffect(() => {
    if (!open || items.length === 0) return undefined
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [open, items])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-soft transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-linen/80 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">Your Cart</p>
            <h2 className="font-serif text-3xl">A refined edit</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-linen text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-velmora-ink">Your cart is waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-bronze">
                Add a luminous piece for yourself or a gift-ready treasure for someone you love.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-velmora-gold px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory"
              >
                Shop jewelry
              </Link>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => {
                const titleId = `cart-${item.itemId}-title`
                const descId = `cart-${item.itemId}-desc`
                return (
                  <article key={item.itemId} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-linen/60 pb-5">
                    <div className="overflow-hidden bg-velmora-pearl">
                      <ProductImage
                        id={`cart-${item.itemId}-image`}
                        query={`[${descId}] [${titleId}]`}
                        ratio="1x1"
                        width="300"
                        alt={item.name}
                        className="h-24 w-24 object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={titleId} className="font-serif text-sm uppercase tracking-[0.2em] text-velmora-ink">
                            {item.name}
                          </h3>
                          <p id={descId} className="mt-1 text-xs text-velmora-bronze">
                            {item.variant} · {item.category}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price)}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-ivory">
                          <button
                            type="button"
                            className="p-2 text-velmora-ink transition hover:text-velmora-gold"
                            aria-label={`Decrease ${item.name}`}
                            onClick={() => onQuantityChange(item.itemId, item.quantity - 1)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            className="p-2 text-velmora-ink transition hover:text-velmora-gold"
                            aria-label={`Increase ${item.name}`}
                            onClick={() => onQuantityChange(item.itemId, item.quantity + 1)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-bronze underline decoration-velmora-linen underline-offset-4 transition hover:text-velmora-ink"
                          onClick={() => onRemove(item.itemId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-linen/80 px-6 py-6">
            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-velmora-bronze">Shipping and taxes are calculated at checkout.</p>
            <button
              type="button"
              className="mt-5 w-full rounded-full bg-velmora-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Checkout later
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
