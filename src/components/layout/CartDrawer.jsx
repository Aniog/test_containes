import { useRef } from 'react'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { getCartSubtotal } from '@/lib/cart'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = getCartSubtotal(items)
  const drawerRef = useRef(null)
  useImageLoader(drawerRef, [isOpen, items.length])

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        ref={drawerRef}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-editorial transition-transform duration-300 sm:w-[28rem] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">Your cart</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Velmora pieces</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-ink/10 p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-cocoa">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
              <p className="font-serif text-3xl text-velmora-ink">Your jewelry box is empty.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cocoa">
                Add a demi-fine favorite and it will appear here, ready for checkout.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => {
                const titleId = `cart-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}-title`
                const descId = `cart-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}-desc`

                return (
                  <article key={`${item.id}-${item.variant}`} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                    <div className="flex aspect-square items-center justify-center border border-velmora-ink/10 bg-velmora-sand text-center text-velmora-ink">
                      <div>
                        <p className="font-serif text-3xl font-semibold text-velmora-bronze">V</p>
                        <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-velmora-cocoa">{item.category}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                            {item.name}
                          </h3>
                          <p id={descId} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-cocoa">{item.variant}</p>
                        </div>
                        <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price)}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-velmora-ink/15 text-velmora-ink">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 transition hover:bg-velmora-sand/60"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 transition hover:bg-velmora-sand/60"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id, item.variant)}
                          className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-bronze underline-offset-4 hover:underline"
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

        <div className="border-t border-velmora-ink/10 bg-velmora-ivory px-5 py-5">
          <div className="mb-4 flex items-center justify-between text-velmora-ink">
            <span className="text-sm uppercase tracking-[0.22em]">Subtotal</span>
            <span className="font-serif text-3xl font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full bg-velmora-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze"
          >
            Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-cocoa">
            Secure checkout can be connected when you are ready to launch.
          </p>
        </div>
      </aside>
    </div>
  )
}
