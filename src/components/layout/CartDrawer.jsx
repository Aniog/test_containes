import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/lib/format'

export default function CartDrawer({ isOpen, items, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-[-24px_0_60px_rgba(23,18,14,0.18)] transition duration-500 sm:w-[28rem] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-stone px-5 py-5 sm:px-7">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-velmora-muted">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your pieces</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-stone p-2 text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-gold" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="font-serif text-3xl text-velmora-ink">Your cart is waiting.</p>
                <p className="mt-3 text-sm leading-6 text-velmora-muted">Add a luminous favorite to begin your Velmora ritual.</p>
                <Link to="/shop" onClick={onClose} className="mt-7 inline-flex rounded-full bg-velmora-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-cream transition hover:bg-velmora-gold">
                  Shop now
                </Link>
              </div>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-stone pb-5">
                  <div className="grid aspect-square place-items-center rounded-2xl bg-velmora-stone text-velmora-ink">
                    <span className="font-serif text-3xl tracking-[0.2em]">V</span>
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-lg uppercase tracking-[0.14em] text-velmora-ink">{item.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-velmora-muted">{item.variant} tone</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-velmora-muted transition hover:text-velmora-gold" aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-stone bg-white/50 text-velmora-ink">
                        <button type="button" onClick={() => onDecrease(item.id, item.variant)} className="p-2 text-velmora-ink transition hover:text-velmora-gold" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onIncrease(item.id, item.variant)} className="p-2 text-velmora-ink transition hover:text-velmora-gold" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold tracking-[0.12em] text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-stone px-5 py-5 sm:px-7">
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs leading-5 text-velmora-muted">Shipping and taxes calculated at checkout. Free worldwide shipping is already included.</p>
          <button type="button" className="mt-5 w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-cream disabled:cursor-not-allowed disabled:opacity-50" disabled={items.length === 0}>
            Continue to Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
