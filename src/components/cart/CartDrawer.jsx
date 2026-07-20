import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../data/products'

export default function CartDrawer({ open, cartItems, cartCount, cartTotal, onClose, onRemove, onUpdateQuantity }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-[-30px_0_80px_rgba(33,25,21,0.25)] transition-transform duration-500 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Velmora bag</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-sand p-2 text-velmora-espresso transition-colors hover:border-velmora-espresso">
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Close cart</span>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" aria-hidden="true" />
            <h3 className="font-serif text-3xl text-velmora-espresso">Your bag is waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-espresso/70">Add a luminous piece to begin your Velmora ritual.</p>
            <Link to="/shop" onClick={onClose} className="mt-7 bg-velmora-champagne px-7 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition-colors hover:bg-velmora-gold hover:text-velmora-ivory">
              Shop jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-7">
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-sand/70 pb-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-serif text-base uppercase tracking-[0.16em] text-velmora-espresso">{item.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-espresso/60">{item.tone} tone</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.tone)} className="p-1 text-velmora-espresso/50 transition-colors hover:text-velmora-espresso">
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Remove {item.name}</span>
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-sand bg-velmora-ivory">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)} className="p-2 text-velmora-espresso hover:bg-velmora-sand/50">
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="min-w-9 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)} className="p-2 text-velmora-espresso hover:bg-velmora-sand/50">
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-velmora-espresso">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-sand bg-velmora-ivory px-5 py-5 sm:px-7">
              <div className="flex items-center justify-between font-serif text-2xl text-velmora-espresso">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-espresso/70">Shipping and returns are complimentary. Checkout integration can be connected next.</p>
              <button type="button" className="mt-5 w-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition-colors hover:bg-velmora-champagne hover:text-velmora-espresso">
                Checkout • {cartCount} item{cartCount === 1 ? '' : 's'}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
