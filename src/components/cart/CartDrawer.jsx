import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'

const CartDrawer = () => {
  const {
    cartItems,
    closeCart,
    isCartOpen,
    removeFromCart,
    subtotal,
    updateQuantity,
  } = useStore()

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-velmora-surface text-velmora-ink shadow-luxe transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">
              Shopping Cart
            </p>
            <h2 className="mt-2 font-display text-3xl text-velmora-ink">Your Edit</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-line text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-3xl text-velmora-ink">Your cart is empty</p>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-muted">
                Discover demi-fine pieces designed for gifting, layering, and
                everyday shine.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.25em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
              >
                Browse the Collection
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.productId}-${item.variant}`}
                  className="rounded-[24px] border border-velmora-line bg-velmora-ivory p-4 shadow-soft"
                >
                  <div className="flex gap-4">
                    <div className="relative aspect-[4/5] w-24 overflow-hidden rounded-[18px] bg-velmora-champagne">
                      <img
                        alt={item.shortName}
                        className="h-full w-full object-cover"
                        src={item.image}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-3">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3
                              id={`cart-${item.productId}-name`}
                              className="font-display text-xl uppercase tracking-[0.18em] text-velmora-ink"
                            >
                              {item.name}
                            </h3>
                            <p
                              id={`cart-${item.productId}-variant`}
                              className="mt-1 text-xs uppercase tracking-[0.22em] text-velmora-taupe"
                            >
                              {item.variant}
                            </p>
                          </div>
                          <span className="text-sm text-velmora-ink">
                            ${item.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex items-center rounded-full border border-velmora-line bg-white">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.variant, item.quantity - 1)
                            }
                            className="h-9 w-9 text-velmora-ink"
                            aria-label={`Decrease quantity for ${item.shortName}`}
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.variant, item.quantity + 1)
                            }
                            className="h-9 w-9 text-velmora-ink"
                            aria-label={`Increase quantity for ${item.shortName}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.productId, item.variant)}
                          className="text-xs uppercase tracking-[0.24em] text-velmora-muted transition hover:text-velmora-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-ivory px-6 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-muted">
            <span>Subtotal</span>
            <span className="text-lg tracking-[0.12em] text-velmora-ink">${subtotal}</span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-velmora-ink px-6 py-4 text-sm uppercase tracking-[0.25em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
          >
            Checkout Coming Soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
