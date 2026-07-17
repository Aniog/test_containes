import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    removeItem,
    updateItemQuantity,
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[70] transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-ivory shadow-2xl transition duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
              Cart
            </p>
            <h2 className="mt-2 font-display text-3xl text-velmora-ink">
              Your selections
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ink transition hover:border-velmora-champagne hover:text-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-velmora-stone text-velmora-espresso">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-velmora-ink">
              Your cart is empty
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-muted">
              Discover quietly luxurious pieces designed for gifting and everyday shine.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-velmora-espresso px-6 py-3 text-xs uppercase tracking-[0.32em] text-velmora-champagne transition hover:-translate-y-0.5 hover:bg-velmora-ink"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <article
                  key={`${item.productId}-${item.tone}`}
                  className="grid grid-cols-[88px_1fr] gap-4 rounded-[28px] border border-velmora-line bg-white/85 p-4 shadow-[0_10px_30px_rgba(61,47,39,0.08)]"
                >
                  <div className="flex aspect-square h-full w-full items-end rounded-[22px] bg-gradient-to-br from-velmora-stone via-white to-velmora-champagne/35 p-3">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-velmora-espresso/70">
                      Velmora
                    </span>
                  </div>
                  <div>
                    <p id={item.titleId} className="text-xs uppercase tracking-[0.28em] text-velmora-ink">
                      {item.name}
                    </p>
                    <p id={item.descId} className="mt-2 text-sm text-velmora-muted">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-sm text-velmora-ink">
                      <span>{item.tone} tone</span>
                      <span>${item.price}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-stone/50">
                        <button
                          type="button"
                          onClick={() =>
                            updateItemQuantity(item.productId, item.tone, item.quantity - 1)
                          }
                          className="inline-flex h-9 w-9 items-center justify-center text-velmora-ink"
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-velmora-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateItemQuantity(item.productId, item.tone, item.quantity + 1)
                          }
                          className="inline-flex h-9 w-9 items-center justify-center text-velmora-ink"
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.tone)}
                        className="text-xs uppercase tracking-[0.28em] text-velmora-taupe transition hover:text-velmora-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line bg-white/70 px-5 py-5 backdrop-blur-sm">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.26em] text-velmora-taupe">
                <span>Subtotal</span>
                <span className="text-velmora-ink">${subtotal}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-velmora-muted">
                Shipping and taxes calculated at checkout. Real checkout can be connected later.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-velmora-espresso px-6 py-4 text-xs uppercase tracking-[0.34em] text-velmora-champagne transition hover:-translate-y-0.5 hover:bg-velmora-ink"
              >
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
