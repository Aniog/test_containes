import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-pearl text-espresso shadow-velvet transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-mist px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-champagne-dark">Velmora</p>
            <h2 className="font-serif text-3xl text-espresso">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist bg-porcelain text-espresso transition hover:bg-espresso hover:text-pearl" aria-label="Close cart">
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blush text-champagne-dark">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-3xl text-espresso">Your jewelry box is empty</h3>
            <p className="mt-3 text-sm leading-6 text-mocha">Add a pair of huggies, a luminous necklace, or a gift-ready set to begin.</p>
            <button type="button" onClick={onClose} className="mt-7 bg-espresso px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-pearl transition hover:bg-champagne-dark">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-7">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-mist pb-4">
                    <div className="aspect-square overflow-hidden bg-blush">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blush via-pearl to-mist text-center font-serif text-3xl text-champagne-dark">
                        V
                      </div>
                    </div>
                    <div className="min-w-0 text-espresso">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-base uppercase tracking-product text-espresso">{item.name}</h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mocha">{item.variant} tone</p>
                        </div>
                        <button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-mocha transition hover:text-espresso" aria-label={`Remove ${item.name}`}>
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center border border-mist bg-porcelain">
                          <button type="button" className="px-3 py-2 text-espresso transition hover:bg-blush" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} aria-label="Decrease quantity">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold text-espresso">{item.quantity}</span>
                          <button type="button" className="px-3 py-2 text-espresso transition hover:bg-blush" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} aria-label="Increase quantity">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-espresso">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-mist bg-porcelain px-5 py-5 sm:px-7">
              <div className="mb-4 flex items-center justify-between text-espresso">
                <span className="text-sm uppercase tracking-[0.2em] text-mocha">Subtotal</span>
                <span className="font-serif text-3xl">${subtotal}</span>
              </div>
              <p className="mb-4 text-xs leading-5 text-mocha">Shipping and taxes are calculated at checkout. Free worldwide shipping is already included.</p>
              <button type="button" className="w-full bg-espresso px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-pearl transition hover:bg-champagne-dark">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
