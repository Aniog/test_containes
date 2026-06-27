import { Minus, Plus, X } from 'lucide-react'
import { imageFor } from '@/data/imageRegistry'
import { formatPrice } from '@/data/products'
import { getCartItemProduct, getCartSubtotal } from '@/lib/cart'

export default function CartDrawer({ open, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = getCartSubtotal(items)

  return (
    <div
      className={`fixed inset-0 z-50 transition duration-300 ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-obsidian/55 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-espresso text-porcelain shadow-editorial transition duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-porcelain/15 px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-softgold">
              Your Cart
            </p>
            <h2 className="font-serif text-3xl text-porcelain">Reserved pieces</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-porcelain/20 p-2 text-porcelain transition hover:border-gold hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div className="max-w-xs space-y-4">
                <p className="font-serif text-3xl text-porcelain">Your jewelry box is empty.</p>
                <p className="text-sm leading-6 text-porcelain/75">
                  Add a golden essential and it will appear here for review.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const product = getCartItemProduct(item)
                if (!product) return null

                return (
                  <article
                    key={product.id}
                    className="grid grid-cols-[5rem_1fr] gap-4 border-b border-porcelain/10 pb-4"
                  >
                    <div className="aspect-square overflow-hidden rounded-xl bg-sand">
                      <img
                        alt={product.name}
                        src={imageFor[product.id]?.primary}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-porcelain">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-porcelain/70">{formatPrice(product.price)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(product.id)}
                          className="text-xs font-bold uppercase tracking-[0.16em] text-porcelain/65 transition hover:text-gold"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="inline-flex items-center rounded-full border border-porcelain/20 text-porcelain">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, item.quantity - 1)}
                          className="p-2 transition hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, item.quantity + 1)}
                          className="p-2 transition hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-porcelain/15 p-5">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl text-porcelain">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-obsidian transition hover:bg-softgold"
          >
            Continue to Checkout
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-porcelain/65">
            Checkout connection can be added when you are ready to go live.
          </p>
        </div>
      </aside>
    </div>
  )
}
