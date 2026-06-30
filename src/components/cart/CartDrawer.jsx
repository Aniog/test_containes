import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

const CartDrawer = () => {
  const drawerRef = useRef(null)
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  useStrkImages(drawerRef, [isCartOpen, items.length])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-brand-ink/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-brand-border bg-brand-ivory shadow-elevated transition duration-500 md:max-w-lg ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-brand-border px-5 py-5 md:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">Your Cart</p>
            <h2 className="font-display text-3xl text-brand-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-brand-border p-2 text-brand-ink transition hover:border-brand-gold hover:text-brand-gold-deep"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full bg-brand-pearl p-5 text-brand-gold-deep">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl text-brand-ink">Your cart is empty</h3>
              <p className="text-base leading-7 text-brand-muted">
                Add a few polished pieces and come back when you are ready.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-brand-ink px-6 py-3 text-sm uppercase tracking-[0.24em] text-brand-ivory transition hover:bg-brand-ink/90"
            >
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6 md:px-7">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[96px_1fr] gap-4 rounded-[1.5rem] border border-brand-border bg-white/80 p-4"
                >
                  <div className="overflow-hidden rounded-[1.25rem] bg-brand-sand">
                    <img
                      alt={item.product.shortName}
                      className="aspect-[4/5] h-full w-full object-cover"
                      data-strk-img-id={`cart-${item.product.slug}-${item.tone.toLowerCase().replace(/\s+/g, '-')}`}
                      data-strk-img={`[cart-title-${item.id}] [cart-tone-${item.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            id={`cart-title-${item.id}`}
                            className="font-display text-xl uppercase tracking-[0.18em] text-brand-ink"
                          >
                            {item.product.name}
                          </h3>
                          <p
                            id={`cart-tone-${item.id}`}
                            className="text-sm text-brand-muted"
                          >
                            {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs uppercase tracking-[0.24em] text-brand-muted transition hover:text-brand-gold-deep"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm font-medium text-brand-ink">${item.product.price}</p>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border border-brand-border bg-brand-pearl px-2 py-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full p-2 text-brand-ink"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center text-sm text-brand-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full p-2 text-brand-ink"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-base font-medium text-brand-ink">${item.lineTotal}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-5 border-t border-brand-border px-5 py-6 md:px-7">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-brand-muted">
                <span>Subtotal</span>
                <span className="text-brand-ink">${subtotal}</span>
              </div>
              <p className="text-sm leading-6 text-brand-muted">
                Taxes and shipping are calculated at checkout. Free worldwide shipping over $75.
              </p>
              <button
                type="button"
                className="w-full rounded-full bg-brand-gold px-6 py-4 text-sm uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-gold-soft"
              >
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
