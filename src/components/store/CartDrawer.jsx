import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/storeData'
import { useStore } from '@/context/StoreContext'
import { useStockImages } from '@/hooks/useStockImages'

export default function CartDrawer() {
  const {
    cartOpen,
    setCartOpen,
    cartLineItems,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useStore()
  const containerRef = useStockImages([cartOpen, cartLineItems.length])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition ${
          cartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setCartOpen(false)}
      />
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora transition duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!cartOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-mist/70 px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-velmora text-velmora-muted">
              Shopping cart
            </p>
            <h2 className="mt-2 font-display text-3xl text-velmora-ink">Your Edit</h2>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-mist/70 bg-white/80 text-velmora-ink"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartLineItems.length ? (
            <div className="space-y-5">
              {cartLineItems.map((item) => (
                <article
                  key={item.key}
                  className="rounded-[1.75rem] border border-velmora-mist/70 bg-white/80 p-4 shadow-soft"
                >
                  <div className="flex gap-4">
                    <div className="h-28 w-24 overflow-hidden rounded-[1.25rem] bg-velmora-panel">
                      <img
                        data-strk-img-id={`velmora-cart-${item.product.id}-${item.tone}`}
                        data-strk-img={`[cart-${item.product.id}-desc] [cart-${item.product.id}-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3
                            id={`cart-${item.product.id}-title`}
                            className="font-display text-lg uppercase tracking-velmora text-velmora-ink"
                          >
                            {item.product.name}
                          </h3>
                          <p className="mt-2 text-sm text-velmora-muted">{item.tone}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.key)}
                          className="text-sm text-velmora-muted transition hover:text-velmora-ink"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="mt-4 text-sm font-semibold text-velmora-ink">
                        {formatPrice(item.product.price)}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="inline-flex items-center rounded-full border border-velmora-mist/70 bg-velmora-ivory px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-semibold text-velmora-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-velmora-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-velmora-ink">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                      <p id={`cart-${item.product.id}-desc`} className="sr-only">
                        Warm editorial product image for {item.product.name} in the cart.
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-velmora-mist bg-white/60 px-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-velmora-panel text-velmora-ink">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-3xl text-velmora-ink">Your cart is empty</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-muted">
                Add a few polished staples to begin your Velmora edit.
              </p>
              <Link
                to="/shop"
                onClick={() => setCartOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-velmora-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-soft"
              >
                Shop now
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist/70 bg-white/70 px-6 py-6">
          <div className="flex items-center justify-between text-sm text-velmora-muted">
            <span>Subtotal</span>
            <span className="font-semibold text-velmora-ink">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs leading-6 text-velmora-muted">
            Shipping and duties are calculated at checkout. This demo storefront keeps cart state ready for a future checkout integration.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:-translate-y-0.5"
          >
            Checkout coming soon
          </button>
        </div>
      </aside>
    </>
  )
}
