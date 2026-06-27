import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'
const getImageUrl = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url || placeholder

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-noir/45 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-sand bg-porcelain text-noir shadow-2xl transition duration-500 sm:w-[30rem] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Velmora Cart</p>
            <h2 className="font-serif text-3xl font-semibold text-noir">Your Edit</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-sand p-2 text-noir transition hover:border-champagne hover:text-champagne focus:outline-none focus:ring-2 focus:ring-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 rounded-full border border-sand bg-ivory p-5 text-champagne">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-noir">Your cart is empty</h3>
              <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-taupe">
                Add a piece from the collection and it will appear here, ready for gifting or keeping.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-sand pb-5">
                  <div className="overflow-hidden rounded-t-full bg-ivory">
                    <img
                      src={getImageUrl(`product-main-${item.id}`)}
                      alt={item.name}
                      className="h-20 w-20 object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.id}`} className="font-serif text-lg font-semibold uppercase tracking-[0.15em] text-noir">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-sans text-sm text-taupe">{formatPrice(item.price)}</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id)} className="font-sans text-xs uppercase tracking-[0.18em] text-taupe underline-offset-4 hover:text-noir hover:underline">
                        Remove
                      </button>
                    </div>
                    <div className="mt-4 inline-flex items-center rounded-full border border-sand bg-ivory text-noir">
                      <button type="button" onClick={() => onDecrement(item.id)} className="p-2 text-noir hover:text-champagne" aria-label={`Decrease ${item.name}`}>
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center font-sans text-sm font-semibold">{item.quantity}</span>
                      <button type="button" onClick={() => onIncrement(item.id)} className="p-2 text-noir hover:text-champagne" aria-label={`Increase ${item.name}`}>
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-sand bg-ivory px-6 py-5">
          <div className="mb-4 flex items-center justify-between font-sans text-sm uppercase tracking-[0.18em] text-noir">
            <span>Subtotal ({itemCount})</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-champagne px-6 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-noir transition hover:bg-bronze hover:text-ivory focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-ivory disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
          <p className="mt-3 text-center font-sans text-xs leading-5 text-taupe">Checkout is ready to connect when your payment provider is added.</p>
        </div>
      </aside>
    </div>
  )
}
