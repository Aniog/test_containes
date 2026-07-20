import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-velvet transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mink/70 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">Velmora</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-espresso">Your Cart</h2>
          </div>
          <button type="button" className="rounded-full border border-velmora-mink p-2 text-velmora-espresso hover:bg-velmora-blush" onClick={onClose} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto h-10 w-10 text-velmora-gold" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-3xl font-semibold text-velmora-espresso">Your cart is quiet.</h3>
                <p className="mt-3 text-sm leading-6 text-velmora-truffle">Add a gold detail to make the moment feel finished.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-6 inline-flex rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso"
                >
                  Shop Jewelry
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="grid grid-cols-cart gap-4 border-b border-velmora-mink/60 pb-5">
                  <div className="grid aspect-square place-items-center bg-velmora-champagne text-velmora-espresso">
                    <ShoppingBag className="h-7 w-7 text-velmora-gold" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-${item.slug}-name`} className="font-serif text-base font-semibold uppercase tracking-editorial text-velmora-espresso">
                          {item.name}
                        </h3>
                        <p id={`cart-${item.slug}-tone`} className="mt-1 text-xs font-semibold uppercase tracking-editorial text-velmora-truffle">
                          {item.tone} tone
                        </p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.tone)} className="text-velmora-truffle transition hover:text-velmora-espresso" aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-mink bg-velmora-ivory text-velmora-espresso">
                        <button type="button" className="p-2" onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)} aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button type="button" className="p-2" onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)} aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-velmora-espresso">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mink/70 bg-velmora-ivory px-5 py-5 text-velmora-espresso">
          <div className="flex items-center justify-between text-sm font-bold uppercase tracking-editorial">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-sm text-velmora-truffle">Shipping and taxes calculated at checkout.</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-extrabold uppercase tracking-atelier text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
