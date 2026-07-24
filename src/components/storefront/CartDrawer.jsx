import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

const CartDrawer = ({ isOpen, items, onClose, onRemove, onUpdateQuantity }) => {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-velvet transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-luxury text-velmora-goldDark">
              Velmora Cart
            </p>
            <h2 className="font-serifDisplay text-3xl font-semibold text-velmora-ink">
              Your pieces
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-linen p-2 text-velmora-ink transition hover:border-velmora-gold hover:bg-velmora-cream"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 rounded-full bg-velmora-cream p-5 text-velmora-goldDark">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serifDisplay text-3xl font-semibold">Your cart is quiet.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mauve">
                Add a luminous Velmora piece and it will appear here, ready for checkout.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-linen pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-luxury text-velmora-goldDark">
                        {item.tone} tone
                      </p>
                      <h3 className="mt-1 font-serifDisplay text-xl font-semibold uppercase tracking-product text-velmora-ink">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-velmora-mauve">
                        {formatPrice(item.price)} each
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.tone)}
                      className="text-xs font-bold uppercase tracking-luxury text-velmora-mauve transition hover:text-velmora-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-cream text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="p-3 transition hover:text-velmora-goldDark"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="p-3 transition hover:text-velmora-goldDark"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="font-semibold text-velmora-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-linen bg-velmora-cream px-6 py-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between font-serifDisplay text-2xl font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-5 text-xs leading-5 text-velmora-mauve">
            Shipping and taxes are calculated at checkout. Free worldwide shipping is included.
          </p>
          <button type="button" className="premium-button w-full" disabled={items.length === 0}>
            Continue to Checkout
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
