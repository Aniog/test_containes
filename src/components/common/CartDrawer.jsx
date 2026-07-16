import { Link } from 'react-router-dom'
import { ShoppingBag, Trash2, X } from 'lucide-react'
import QuantityControl from './QuantityControl.jsx'

const CartDrawer = ({ isOpen, items, subtotal, onClose, onIncrease, onDecrease, onRemove }) => (
  <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
    <div
      className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    />
    <aside
      className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div className="flex items-center justify-between border-b border-velmora-stone px-5 py-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-nav text-velmora-bronze">Your selection</p>
          <h2 className="font-serif text-3xl font-semibold text-velmora-espresso">Shopping Bag</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-velmora-stone bg-velmora-porcelain text-velmora-espresso transition hover:bg-velmora-blush focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
          aria-label="Close cart"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        {items.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-[2rem] border border-dashed border-velmora-stone bg-velmora-porcelain p-8 text-center text-velmora-espresso">
            <ShoppingBag className="h-10 w-10 text-velmora-champagne" />
            <h3 className="mt-5 font-serif text-3xl font-semibold">Your bag is waiting</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-muted">
              Add a little gold glow from the collection to begin your Velmora edit.
            </p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-6 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-nav text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso"
            >
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {items.map((item) => (
              <div key={item.cartKey} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-stone pb-5">
                <div className="flex aspect-square items-center justify-center rounded-2xl border border-velmora-stone bg-velmora-blush text-velmora-espresso">
                  <span className="font-serif text-3xl font-semibold uppercase tracking-nav">
                    {item.name.slice(0, 1)}
                  </span>
                </div>
                <div className="min-w-0 text-velmora-espresso">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-nav text-velmora-bronze">
                        {item.category} · {item.tone} Tone
                      </p>
                      <h3 className="mt-1 font-serif text-lg font-semibold uppercase tracking-luxury text-velmora-espresso">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.cartKey)}
                      className="rounded-full p-2 text-velmora-muted transition hover:bg-velmora-porcelain hover:text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <QuantityControl
                      value={item.quantity}
                      onDecrease={() => onDecrease(item.cartKey)}
                      onIncrease={() => onIncrease(item.cartKey)}
                      label={item.name}
                    />
                    <p className="font-serif text-xl font-semibold text-velmora-espresso">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-velmora-stone bg-velmora-porcelain px-5 py-5 text-velmora-espresso">
        <div className="flex items-center justify-between font-serif text-2xl font-semibold">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <p className="mt-2 text-sm text-velmora-muted">Taxes and shipping calculated at checkout.</p>
        <button
          type="button"
          className="mt-5 w-full rounded-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-nav text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
        >
          Continue to Checkout
        </button>
      </div>
    </aside>
  </div>
)

export default CartDrawer
