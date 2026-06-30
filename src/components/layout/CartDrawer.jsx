import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '../../data/products.js'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-velvet transition duration-500 sm:w-[30rem] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Velmora Bag</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="rounded-full p-3 transition hover:bg-velmora-champagne">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-velmora-gold" />
              <h3 className="mt-5 font-serif text-3xl font-semibold">Your bag is quiet.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cocoa">
                Add a pair of huggies or a delicate necklace to begin your Velmora ritual.
              </p>
              <a href="#/shop" onClick={onClose} className="mt-8 bg-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-pearl transition hover:bg-velmora-gold hover:text-velmora-ink">
                Browse Jewelry
              </a>
            </div>
          ) : (
            <ul className="grid gap-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                  <div className="aspect-square overflow-hidden bg-velmora-champagne">
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      data-strk-img-id={item.imageId}
                      data-strk-img={`[cart-${item.id}-title]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p id={`cart-${item.id}-title`} className="font-serif text-lg font-semibold uppercase tracking-luxe text-velmora-ink">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-cocoa">{item.variant} tone</p>
                      </div>
                      <button type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.id, item.variant)} className="p-2 text-velmora-cocoa transition hover:text-velmora-ink">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-ink/15">
                        <button type="button" aria-label="Decrease quantity" onClick={() => onDecrement(item.id, item.variant)} className="p-2 transition hover:bg-velmora-champagne">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => onIncrement(item.id, item.variant)} className="p-2 transition hover:bg-velmora-champagne">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-bold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-ink/10 px-5 py-5">
          <div className="flex items-center justify-between font-bold text-velmora-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-cocoa">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
          <button
            type="button"
            disabled={items.length === 0}
            className="mt-5 w-full bg-velmora-gold px-6 py-4 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-ink hover:text-velmora-pearl disabled:cursor-not-allowed disabled:bg-velmora-champagne disabled:text-velmora-cocoa"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
