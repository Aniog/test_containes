import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
      inert={!isOpen ? '' : undefined}
    >
      <div
        className={`absolute inset-0 bg-stone-950/45 transition duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl transition duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Shopping bag</p>
            <h2 className="font-serif text-3xl">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-serif text-3xl text-stone-900">Your cart is empty</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-stone-600">
                Add a few Velmora pieces to begin building your everyday jewelry edit.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm uppercase tracking-[0.3em] text-stone-50 transition hover:bg-stone-800"
              >
                Shop now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.tone}`}
                  className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 items-end rounded-2xl bg-gradient-to-b from-stone-200 to-stone-300 p-3 text-[10px] uppercase tracking-[0.24em] text-stone-700">
                      <span>{item.name.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            id={`cart-${item.id}-title`}
                            className="font-serif text-lg uppercase tracking-[0.2em] text-stone-900"
                          >
                            {item.name}
                          </h3>
                          <p id={`cart-${item.id}-desc`} className="mt-1 text-sm text-stone-500">
                            {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id, item.tone)}
                          className="text-stone-400 transition hover:text-stone-900"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="px-3 py-2 text-stone-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="px-3 py-2 text-stone-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm uppercase tracking-[0.25em] text-stone-700">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-stone-200 bg-white px-5 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-stone-500">
            <span>Subtotal</span>
            <span className="text-stone-900">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-6 py-4 text-sm uppercase tracking-[0.3em] text-stone-950 transition hover:bg-amber-300"
          >
            Checkout coming soon
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
