import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

export default function CartDrawer({ isOpen, cartItems, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-charcoal shadow-jewel transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Velmora Cart</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-charcoal">Your edit</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-2 text-velmora-charcoal transition hover:border-velmora-brass hover:text-velmora-brass" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-charcoal">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-brass" />
            <p className="font-serif text-3xl font-semibold">Your cart is quietly waiting.</p>
            <p className="mt-3 text-sm leading-6 text-velmora-muted">Add a piece from the collection to begin your Velmora ritual.</p>
            <button type="button" onClick={onClose} className="mt-8 bg-velmora-ink px-7 py-3 text-xs font-bold uppercase tracking-wide-luxury text-velmora-ivory transition hover:bg-velmora-brass">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-line py-5 text-velmora-charcoal">
                  <div className="grid h-24 w-20 shrink-0 place-items-center bg-velmora-porcelain text-velmora-brass">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base font-semibold uppercase tracking-luxury text-velmora-charcoal">{item.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-luxury text-velmora-muted">{item.variant}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-line bg-velmora-ivory text-velmora-charcoal">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="p-2 text-velmora-charcoal hover:text-velmora-brass" aria-label={`Decrease ${item.name} quantity`}>
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="p-2 text-velmora-charcoal hover:text-velmora-brass" aria-label={`Increase ${item.name} quantity`}>
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-velmora-charcoal">${item.price * item.quantity}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id, item.variant)} className="mt-3 text-xs font-bold uppercase tracking-luxury text-velmora-muted underline-offset-4 hover:text-velmora-brass hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-line bg-velmora-porcelain px-6 py-6 text-velmora-charcoal">
              <div className="flex items-center justify-between text-sm uppercase tracking-luxury text-velmora-muted">
                <span>Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span>
                <span className="text-base font-semibold tracking-normal text-velmora-charcoal">${subtotal}</span>
              </div>
              <p className="mt-3 text-xs leading-5 text-velmora-muted">Shipping and taxes calculated at checkout. Complimentary worldwide shipping included.</p>
              <button type="button" className="mt-5 w-full bg-velmora-gold px-8 py-4 text-xs font-extrabold uppercase tracking-wide-luxury text-velmora-ink transition hover:bg-velmora-brass hover:text-velmora-ivory">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
