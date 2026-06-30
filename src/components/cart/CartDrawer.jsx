import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/lib/format.js'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-espresso/55 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-2xl transition duration-500 sm:rounded-l-[2rem] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-burnished">Your Bag</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-espresso">{itemCount} {itemCount === 1 ? 'piece' : 'pieces'}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-espresso/15 bg-velmora-ivory p-3 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-burnished"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <div className="mb-5 rounded-full bg-velmora-champagne p-5 text-velmora-burnished">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-velmora-espresso">Your bag is waiting.</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">
              Add a favorite piece and we will keep it here while you browse.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[86px_1fr] gap-4 rounded-3xl border border-velmora-espresso/10 bg-white/45 p-3 text-velmora-ink">
                  <img
                    className="aspect-square rounded-2xl bg-velmora-champagne object-cover"
                    alt={item.product.name}
                    data-cart-image-key={item.key}
                    src={item.product.artwork}
                  />
                  <div className="min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-base font-semibold uppercase tracking-[0.16em] text-velmora-espresso">{item.product.name}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">{item.variant} tone</p>
                      </div>
                      <p className="font-serif text-xl font-semibold text-velmora-espresso">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-espresso/15 bg-velmora-ivory text-velmora-espresso">
                        <button type="button" className="p-2 transition hover:text-velmora-gold" onClick={() => onUpdateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" className="p-2 transition hover:text-velmora-gold" onClick={() => onUpdateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.key)} className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-burnished underline-offset-4 transition hover:text-velmora-espresso hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-velmora-espresso/10 bg-velmora-champagne/65 p-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl font-semibold text-velmora-espresso">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-5 text-sm leading-6 text-velmora-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button type="button" className="w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-gold disabled:cursor-not-allowed disabled:opacity-50" disabled={items.length === 0}>
            Checkout Later
          </button>
        </div>
      </aside>
    </div>
  )
}
