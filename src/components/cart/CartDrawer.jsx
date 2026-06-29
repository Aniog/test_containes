import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import QuantitySelector from '@/components/ui/QuantitySelector'
import { useCart } from '@/hooks/useCart'

const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-ink)]/45 transition duration-300 ${isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
        aria-hidden={!isCartOpen}
      />
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-[var(--color-card)] text-[var(--color-text-primary)] shadow-[0_18px_50px_rgba(20,14,12,0.24)] transition duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">Cart</p>
            <h2 className="mt-2 font-serif-display text-3xl text-[var(--color-text-primary)]">Your selection</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <p className="font-serif-display text-3xl text-[var(--color-text-primary)]">Your cart is empty</p>
              <p className="max-w-xs text-sm leading-7 text-[var(--color-text-secondary)]">
                Start with a pair of elevated everyday pieces designed to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="border border-[var(--color-accent)] px-5 py-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-primary)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
              >
                Explore shop
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const titleId = `cart-${item.id}-${item.color}-title`
                const colorId = `cart-${item.id}-${item.color}-color`

                return (
                  <article
                    key={`${item.id}-${item.color}`}
                    className="grid grid-cols-[90px_1fr] gap-4 border-b border-[var(--color-border-subtle)] pb-5"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface-strong)]">
                      <img
                        src={imagePlaceholder}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        data-strk-img-id={`${item.image.id}-thumb`}
                        data-strk-img={`[${titleId}] [${colorId}]`}
                        data-strk-img-ratio={item.image.ratio}
                        data-strk-img-width="240"
                      />
                    </div>
                    <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          id={titleId}
                          className="font-serif-display text-xl uppercase tracking-[0.16em] text-[var(--color-text-primary)]"
                        >
                          {item.name}
                        </h3>
                        <p
                          id={colorId}
                          className="mt-1 text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]"
                        >
                          {item.color} tone
                        </p>
                      </div>
                      <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-text-primary)]">
                        ${item.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <QuantitySelector
                        compact
                        value={item.quantity}
                        onChange={(quantity) => updateQuantity(item.id, item.color, quantity)}
                      />
                      <button
                        type="button"
                        className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
                        onClick={() => removeItem(item.id, item.color)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-[var(--color-border-subtle)] px-5 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-[var(--color-text-primary)]">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
            Shipping and taxes calculated at checkout. Checkout can be connected later to your live commerce flow.
          </p>
          <button
            type="button"
            className="mt-5 w-full bg-[var(--color-accent)] px-5 py-4 text-xs uppercase tracking-[0.34em] text-[var(--color-ink)] transition hover:opacity-90"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
