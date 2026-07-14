import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, X } from 'lucide-react'

const formatPrice = (price) => `$${price.toFixed(2)}`

function CartDrawer({ isOpen, items, subtotal, onClose, onUpdateQuantity, onRemove }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-velmora-ink/45 transition ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-ivory text-velmora-espresso shadow-2xl transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Your Cart</p>
            <h2 className="mt-2 font-display text-3xl">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-line p-2"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-3xl text-velmora-espresso">Your bag is empty</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-mocha">
              Add a few pieces to begin your edit. Your selections will stay here while you browse.
            </p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-8 rounded-full bg-velmora-espresso px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="rounded-[24px] border border-velmora-line bg-white/80 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-lg uppercase tracking-[0.24em] text-velmora-espresso">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-velmora-mocha">{item.variant}</p>
                      <p className="mt-3 text-sm font-semibold text-velmora-espresso">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.variant)}
                      className="rounded-full border border-velmora-line p-2 text-velmora-mocha transition hover:border-velmora-gold hover:text-velmora-gold"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-full border border-velmora-line px-3 py-2">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                      className="rounded-full p-1 text-velmora-mocha transition hover:text-velmora-espresso"
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-medium text-velmora-espresso">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                      className="rounded-full p-1 text-velmora-mocha transition hover:text-velmora-espresso"
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-line bg-white/70 px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-mocha">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-velmora-espresso">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-medium uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
              >
                Proceed to Checkout
              </button>
              <p className="mt-3 text-xs leading-6 text-velmora-mocha">
                Checkout is ready for future integration. Cart behavior is fully functional in this storefront.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
