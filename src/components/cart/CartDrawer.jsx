import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/storefront'
import { useCart } from '@/context/CartContext.jsx'

function CartDrawer() {
  const {
    closeCart,
    isOpen,
    items,
    removeItem,
    subtotal,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-shadow/40 backdrop-blur-sm transition ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface text-ink shadow-soft transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2 className="font-display text-3xl">Cart</h2>
          </div>
          <button
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:text-ink"
            onClick={closeCart}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-panel text-accent">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl text-ink">Your cart is empty</h3>
              <p className="text-sm leading-7 text-muted">
                Add a few Velmora pieces to curate your everyday rotation.
              </p>
            </div>
            <Link
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-micro text-cream transition hover:bg-accent-deep"
              onClick={closeCart}
              to="/shop"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.variant}`}
                  className="rounded-[1.75rem] border border-border bg-cream p-4 shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <Link
                        className="font-display text-lg uppercase tracking-product text-ink"
                        onClick={closeCart}
                        to={`/product/${item.slug}`}
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs uppercase tracking-micro text-muted">
                        {item.variant}
                      </p>
                      <p className="text-sm text-truffle">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      aria-label={`Remove ${item.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:text-ink"
                      onClick={() => removeItem(item.id, item.variant)}
                      type="button"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-border bg-surface">
                      <button
                        aria-label="Decrease quantity"
                        className="inline-flex h-9 w-9 items-center justify-center text-muted transition hover:text-ink"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        type="button"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium text-ink">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        className="inline-flex h-9 w-9 items-center justify-center text-muted transition hover:text-ink"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        type="button"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-4 border-t border-border px-6 py-6">
              <div className="flex items-center justify-between text-sm text-truffle">
                <span>Subtotal</span>
                <span className="text-base font-medium text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs leading-6 text-muted">
                Shipping and taxes are calculated at checkout. Checkout is not yet connected, but the cart flow is fully ready for integration.
              </p>
              <button
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-micro text-cream transition hover:bg-accent-deep"
                type="button"
              >
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
