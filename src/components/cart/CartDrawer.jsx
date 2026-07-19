import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col bg-velmora-ivory text-velmora-ink shadow-editorial transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-velmora-gold-deep">Your edit</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Cart</h2>
          </div>
          <button className="rounded-full border border-velmora-line bg-transparent p-2 text-velmora-ink hover:border-velmora-gold" onClick={onClose} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
              <p className="font-serif text-3xl font-semibold">Your cart is quiet.</p>
              <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-velmora-taupe">Add a piece of warm gold polish to begin your Velmora collection.</p>
              <Link to="/shop" onClick={onClose} className="mt-7 inline-flex rounded-full bg-velmora-gold px-7 py-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-gold-deep hover:text-velmora-ivory">
                Shop now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.variant}`} className="border-b border-velmora-line pb-5 text-velmora-ink">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-ink">{item.name}</p>
                      <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-velmora-taupe">{item.variant} tone</p>
                      <p className="mt-2 font-sans text-sm font-semibold text-velmora-ink">${item.price}</p>
                    </div>
                    <button className="bg-transparent p-1 font-sans text-xs uppercase tracking-[0.18em] text-velmora-taupe hover:text-velmora-gold-deep" onClick={() => onRemove(item.id, item.variant)}>
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-full border border-velmora-line bg-velmora-mist text-velmora-ink">
                    <button className="bg-transparent p-2 text-velmora-ink hover:text-velmora-gold-deep" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} aria-label={`Decrease ${item.name}`}>
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center font-sans text-sm font-semibold">{item.quantity}</span>
                    <button className="bg-transparent p-2 text-velmora-ink hover:text-velmora-gold-deep" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} aria-label={`Increase ${item.name}`}>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-mist px-6 py-6 text-velmora-ink">
          <div className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-3 font-sans text-xs leading-5 text-velmora-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-gold-deep">
            Continue to checkout
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
