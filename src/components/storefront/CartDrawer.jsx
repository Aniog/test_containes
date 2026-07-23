import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { formatPrice } from '@/data/storefront'
import QuantitySelector from './QuantitySelector'

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  cartSubtotal,
  onRemove,
  onUpdateQuantity,
}) {
  return (
    <div className={`fixed inset-0 z-[60] transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <button
        type="button"
        aria-label="Close cart drawer"
        onClick={onClose}
        className={`absolute inset-0 bg-ink/40 transition ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface shadow-luxe transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-line/70 px-5 py-5 sm:px-6">
          <div>
            <p className="eyebrow">Your edit</p>
            <h2 className="mt-2 font-serif text-3xl text-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition hover:border-gold hover:text-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-3xl text-ink">Your cart is currently empty.</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Start with our most-loved demi-fine pieces and build a set that feels distinctly yours.
            </p>
            <Link to="/shop" onClick={onClose} className="premium-button mt-8">
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6 sm:px-6">
              {cartItems.map((item) => {
                const titleId = `cart-${item.cartKey}-title`
                const variantId = `cart-${item.cartKey}-variant`

                return (
                  <article key={item.cartKey} className="flex gap-4 border-b border-line/60 pb-6 last:border-none">
                    <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-br from-parchment via-surface to-mist/80">
                      <div className="absolute inset-x-4 top-6 h-px bg-line/80" />
                      <div className="absolute inset-x-5 top-10 h-10 rounded-full border border-gold/25" />
                      <div className="absolute bottom-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border border-gold/35" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={titleId} className="font-serif text-lg uppercase tracking-button text-ink">
                            {item.name}
                          </h3>
                          <p id={variantId} className="mt-1 text-xs uppercase tracking-button text-muted">
                            {item.variant} tone
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.cartKey)}
                          className="text-xs uppercase tracking-button text-muted transition hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-auto flex items-end justify-between gap-4 pt-5">
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(value) => onUpdateQuantity(item.cartKey, value)}
                        />
                        <p className="text-sm font-medium text-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="border-t border-line/70 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>Subtotal</span>
                <span className="font-medium text-ink">{formatPrice(cartSubtotal)}</span>
              </div>
              <p className="mt-3 text-xs leading-6 text-muted">
                Taxes and shipping are calculated at checkout. Checkout is ready to connect later.
              </p>
              <button type="button" className="premium-button mt-5 w-full">
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
