import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { money } from '../../data/products'

const CartDrawer = ({ open, items, onClose, onRemove, onQuantityChange }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-2xl transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-velmora-hairline px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-velmora-brass">Velmora Cart</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Bag</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-hairline p-2 text-velmora-ink transition hover:border-velmora-brass hover:text-velmora-brass"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-velmora-hairline bg-velmora-pearl p-8 text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-brass" />
              <h3 className="font-serif text-3xl font-medium">Your bag is quietly waiting.</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-smoke">Add a demi-fine piece and it will appear here instantly.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="rounded-[1.5rem] border border-velmora-hairline bg-velmora-pearl p-4 text-velmora-ink">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-widest text-velmora-ink">{item.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-velmora-brass">{item.tone} tone</p>
                      <p className="mt-2 text-sm font-semibold text-velmora-ink">{money(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.tone)}
                      className="rounded-full p-2 text-velmora-smoke transition hover:bg-velmora-linen hover:text-velmora-ink"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-hairline bg-velmora-ivory text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)}
                        className="p-2 text-velmora-ink transition hover:text-velmora-brass"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold text-velmora-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)}
                        className="p-2 text-velmora-ink transition hover:text-velmora-brass"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-semibold text-velmora-ink">{money(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-hairline bg-velmora-pearl px-6 py-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-base font-semibold">
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </div>
          <p className="mb-5 text-sm leading-6 text-velmora-smoke">Shipping is complimentary. Checkout can be connected when you are ready.</p>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-bold uppercase tracking-widest text-velmora-pearl transition hover:bg-velmora-brass disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
