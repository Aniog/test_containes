import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  if (!open) return null

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-editorial transition duration-500 sm:w-[28rem] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/25 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Your Bag</p>
            <h2 className="font-serif text-2xl text-velmora-espresso">{itemCount} {itemCount === 1 ? 'piece' : 'pieces'}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-taupe/40 bg-transparent p-3 text-velmora-espresso transition hover:border-velmora-champagne hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <div className="mb-5 rounded-full border border-velmora-champagne/50 bg-velmora-ivory p-5 text-velmora-gold">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl">Your cart is quiet.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-cocoa/75">
                Add a golden favorite and it will appear here, ready for gifting or keeping.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="border-b border-velmora-taupe/20 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</h3>
                      <p className="mt-1 text-sm text-velmora-cocoa/70">{item.selectedTone} tone</p>
                      <p className="mt-3 font-bold text-velmora-espresso">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      className="bg-transparent p-0 text-xs font-bold uppercase tracking-[0.18em] text-velmora-gold underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center overflow-hidden rounded-full border border-velmora-taupe/35 text-velmora-espresso">
                    <button
                      type="button"
                      onClick={() => onQuantity(item.id, item.quantity - 1)}
                      className="bg-transparent px-3 py-2 text-velmora-espresso hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-bold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onQuantity(item.id, item.quantity + 1)}
                      className="bg-transparent px-3 py-2 text-velmora-espresso hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-taupe/25 bg-velmora-ivory px-6 py-6 text-velmora-espresso">
          <div className="flex items-center justify-between font-bold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-cocoa/70">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-cocoa focus:outline-none focus:ring-2 focus:ring-velmora-champagne disabled:cursor-not-allowed disabled:opacity-50"
            disabled={items.length === 0}
          >
            Checkout Later
          </button>
        </div>
      </aside>
    </div>
  )
}
