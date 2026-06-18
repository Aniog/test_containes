import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { formatPrice, getCartSubtotal } from '@/lib/cart'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/images'

export default function CartDrawer({ open, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = getCartSubtotal(items)

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-luxe transition-transform duration-500 sm:rounded-l-[2rem] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist px-6 py-5">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-cocoa/70">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your pieces</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-mist p-2 text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-linen" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-velmora-mist bg-velmora-linen/45 p-8 text-center text-velmora-ink">
              <p className="font-serif text-3xl">Your cart is quiet.</p>
              <p className="mt-3 text-sm leading-6 text-velmora-cocoa/80">Add a luminous staple or a gift-ready piece to begin.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.cartId} className="grid grid-cols-[5.25rem_1fr] gap-4 rounded-[1.25rem] border border-velmora-mist bg-white/45 p-3 text-velmora-ink">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-velmora-linen">
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`cart-${item.id}-${item.variant}-91c2`}
                      data-strk-img={`[cart-title-${item.cartId}] [cart-variant-${item.cartId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="220"
                      src={getStrkImageUrl(strkImgConfig, `cart-${item.id}-${item.variant}-91c2`)}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.cartId}`} className="font-serif text-base uppercase tracking-[0.14em] text-velmora-ink">{item.name}</h3>
                        <p id={`cart-variant-${item.cartId}`} className="mt-1 text-xs font-semibold text-velmora-cocoa/75">{item.variant} tone</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.cartId)} className="rounded-full p-1.5 text-velmora-cocoa/75 transition hover:bg-velmora-linen hover:text-velmora-ink" aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-mist bg-velmora-pearl text-velmora-ink">
                        <button type="button" className="p-2 hover:text-velmora-champagne" onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)} aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button type="button" className="p-2 hover:text-velmora-champagne" onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)} aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-bold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist bg-velmora-pearl px-6 py-5 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span className="font-bold text-velmora-cocoa/78">Subtotal</span>
            <span className="font-extrabold text-velmora-ink">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-pearl transition hover:bg-velmora-champagne hover:text-velmora-ink disabled:cursor-not-allowed disabled:opacity-50" disabled={items.length === 0}>
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-cocoa/75">Checkout placeholder ready for future integration.</p>
        </div>
      </aside>
    </div>
  )
}
