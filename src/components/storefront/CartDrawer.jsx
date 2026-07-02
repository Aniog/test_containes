import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer({ cartItems, isOpen, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-parchment text-velmora-ink shadow-velvet transition-transform duration-500 sm:w-drawer ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5">
          <div>
            <p className="font-sans text-xs uppercase tracking-jewel text-velmora-bronze">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Selection</h2>
          </div>
          <button type="button" aria-label="Close cart" className="rounded-full border border-velmora-mist p-2 text-velmora-ink transition-colors hover:border-velmora-gold hover:text-velmora-bronze" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-12 w-12 text-velmora-gold" />
            <h3 className="mt-5 font-serif text-3xl text-velmora-ink">Your cart is quiet.</h3>
            <p className="mt-3 font-sans text-sm leading-6 text-velmora-espresso">
              Add a luminous everyday piece or a gift-ready set to begin.
            </p>
            <Link to="/shop" onClick={onClose} className="mt-7 bg-velmora-gold px-6 py-3 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-ink transition-colors hover:bg-velmora-bronze hover:text-velmora-cream">
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="divide-y divide-velmora-mist">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-5">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-velmora-linen font-serif text-2xl text-velmora-gold">
                      V
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg uppercase tracking-jewel text-velmora-ink">{item.name}</h3>
                      <p className="mt-1 font-sans text-xs uppercase tracking-luxe text-velmora-bronze">{item.variant} tone</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-velmora-mist text-velmora-ink">
                          <button type="button" aria-label={`Decrease ${item.name}`} className="p-2 transition-colors hover:bg-velmora-linen" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}>
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center font-sans text-sm">{item.quantity}</span>
                          <button type="button" aria-label={`Increase ${item.name}`} className="p-2 transition-colors hover:bg-velmora-linen" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}>
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-sans text-sm text-velmora-ink">${item.price * item.quantity}</span>
                      </div>
                      <button type="button" className="mt-3 font-sans text-xs uppercase tracking-luxe text-velmora-bronze underline-offset-4 hover:underline" onClick={() => onRemove(item.id, item.variant)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-mist bg-velmora-cream px-5 py-5">
              <div className="flex items-center justify-between font-sans text-sm text-velmora-ink">
                <span>Subtotal</span>
                <span className="text-lg">${subtotal}</span>
              </div>
              <p className="mt-2 font-sans text-xs leading-5 text-velmora-espresso">
                Shipping and taxes calculated at checkout. Free worldwide shipping is included.
              </p>
              <button type="button" className="mt-5 w-full bg-velmora-ink px-6 py-4 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-cream transition-colors hover:bg-velmora-gold hover:text-velmora-ink">
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
