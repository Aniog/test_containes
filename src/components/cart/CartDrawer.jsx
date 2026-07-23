import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-linen text-velmora-ink shadow-editorial transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-border p-5">
          <div>
            <p className="text-xs uppercase tracking-luxury text-velmora-clay">Velmora Bag</p>
            <h2 className="font-serifDisplay text-2xl text-velmora-ink">Your Cart ({itemCount})</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-full border border-velmora-border p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <div className="mb-5 rounded-full border border-velmora-border bg-velmora-parchment p-5 text-velmora-gold">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-serifDisplay text-3xl">Your jewelry box is empty</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-clay">
              Add a golden keepsake to begin your Velmora ritual.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-velmora-ink px-7 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-linen transition hover:bg-velmora-espresso"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5">
              <div className="space-y-5">
                {items.map((item) => (
                  <article key={`${item.product.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-border pb-5 text-velmora-ink">
                    <div className="flex aspect-square items-center justify-center overflow-hidden bg-velmora-parchment text-center text-velmora-ink">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-velmora-gold/60 bg-velmora-linen font-serifDisplay text-xl text-velmora-gold">
                        {item.product.name.charAt(0)}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={`cart-${item.product.id}-name`} className="font-serifDisplay text-sm uppercase tracking-luxury text-velmora-ink">
                            {item.product.name}
                          </h3>
                          <p id={`cart-${item.product.id}-variant`} className="mt-1 text-xs text-velmora-clay">
                            {item.variant} tone · ${item.product.price}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.product.id, item.variant)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-velmora-clay transition hover:text-velmora-ink"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-border bg-velmora-cream text-velmora-ink">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="p-2 text-velmora-ink transition hover:text-velmora-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="p-2 text-velmora-ink transition hover:text-velmora-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-semibold text-velmora-ink">${item.product.price * item.quantity}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-border bg-velmora-cream p-5 text-velmora-ink">
              <div className="flex items-center justify-between text-sm text-velmora-clay">
                <span>Subtotal</span>
                <span className="font-serifDisplay text-2xl text-velmora-ink">${subtotal}</span>
              </div>
              <p className="mt-3 text-xs leading-5 text-velmora-clay">Shipping and taxes calculated at checkout. Frontend preview only.</p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-brass"
              >
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

