import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-velmora-ink/60 text-velmora-ink backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button type="button" aria-label="Close cart overlay" className="absolute inset-0 h-full w-full cursor-default" onClick={onClose} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawerIn flex-col bg-velmora-ivory shadow-luxury">
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5 sm:px-7">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-luxury text-velmora-antique">Velmora Bag</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="premium-focus inline-flex h-10 w-10 items-center justify-center text-velmora-ink transition hover:text-velmora-antique">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-antique" />
            <h3 className="mt-5 font-serif text-3xl font-semibold text-velmora-ink">Your bag is quiet for now.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-espresso/72">Discover polished gold pieces made for gifting, layering, and everyday rituals.</p>
            <Link to="/shop" onClick={onClose} className="premium-focus mt-8 inline-flex bg-velmora-champagne px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-antique hover:text-velmora-ivory">
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-2 sm:px-7">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-mist py-5">
                  <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-velmora-parchment text-velmora-antique">
                    <ShoppingBag className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={item.cartTitleId} className="font-serif text-base font-semibold uppercase tracking-luxury text-velmora-ink">{item.name}</h3>
                        <p id={item.cartDescId} className="sr-only">{item.description}</p>
                        <p className="mt-1 text-xs uppercase tracking-luxury text-velmora-espresso/65">{item.variant} Tone</p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">${item.price * item.quantity}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-mist bg-velmora-ivory text-velmora-ink">
                        <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="premium-focus inline-flex h-8 w-8 items-center justify-center">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="premium-focus inline-flex h-8 w-8 items-center justify-center">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.variant)} className="premium-focus inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-velmora-espresso/65 transition hover:text-velmora-antique">
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-mist bg-velmora-parchment px-5 py-6 sm:px-7">
              <div className="flex items-center justify-between font-serif text-2xl font-semibold text-velmora-ink">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-espresso/70">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="premium-focus mt-5 w-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-antique">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
