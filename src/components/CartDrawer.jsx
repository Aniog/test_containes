import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-editorial transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-luxury text-velmora-bronze">Velmora</p>
            <h2 className="font-serif text-3xl">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-mist p-2 text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-parchment" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-bronze" />
              <h3 className="font-serif text-3xl">Your jewelry box is empty</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-ink/75">Add your favorite demi-fine pieces and they will appear here.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-mist pb-5">
                  <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-velmora-mist bg-velmora-parchment text-center">
                    <span className="px-3 font-serif text-2xl leading-none text-velmora-bronze" aria-hidden="true">V</span>
                    <span className="sr-only">{item.name}</span>
                  </div>
                  <div>
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 id={`cart-${item.titleId}`} className="font-serif text-base uppercase tracking-luxury text-velmora-ink">{item.name}</h3>
                        <p id={`cart-${item.descId}`} className="mt-1 text-xs text-velmora-ink/70">{item.variant} tone · {item.material}</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-mist bg-velmora-cream">
                        <button type="button" className="p-2 text-velmora-ink transition hover:bg-velmora-parchment" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-velmora-ink">{item.quantity}</span>
                        <button type="button" className="p-2 text-velmora-ink transition hover:bg-velmora-parchment" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-xs uppercase tracking-[0.18em] text-velmora-bronze underline-offset-4 transition hover:text-velmora-ink hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist p-6">
          <div className="mb-4 flex items-center justify-between text-velmora-ink">
            <span className="text-sm uppercase tracking-luxury">Subtotal</span>
            <span className="font-serif text-3xl">{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-4 text-xs leading-5 text-velmora-ink/70">Taxes and checkout integration can be connected later. Free worldwide shipping is included.</p>
          <button type="button" className="w-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-cream">
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
