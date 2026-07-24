import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { formatCurrency } from '../../data/store'
import { useCart } from '../../context/CartContext'
import useStrkImages from '../../lib/useStrkImages'
import QuantitySelector from '../common/QuantitySelector'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart()
  const containerRef = useStrkImages([items, isCartOpen])

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-40 bg-stone-950/70 backdrop-blur-sm transition duration-300',
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        ref={containerRef}
        className={[
          'fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-stone-200/10 bg-stone-950 shadow-[0_30px_120px_rgba(0,0,0,0.55)] transition duration-500',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-label="Shopping cart drawer"
      >
        <div className="flex items-center justify-between border-b border-stone-200/10 px-6 py-5">
          <div>
            <p className="tracking-kicker text-xs uppercase text-amber-200">Cart</p>
            <h2 className="font-display text-3xl text-stone-50">Your selection</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/15 text-stone-200 transition hover:text-stone-50"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length ? (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.key}
                  className="rounded-[1.75rem] border border-stone-200/10 bg-stone-900/80 p-4"
                >
                  <div className="flex gap-4">
                    <div className="relative h-28 w-24 overflow-hidden rounded-2xl bg-stone-100">
                      <span id={`${item.key}-title`} className="sr-only">
                        {item.name}
                      </span>
                      <span id={`${item.key}-desc`} className="sr-only">
                        {item.category} in {item.tone} tone
                      </span>
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="h-full w-full object-cover"
                        data-strk-img-id={`cart-${item.key}-image-a1c2`}
                        data-strk-img={`[${item.imageCueId}] [${item.key}-desc] [${item.key}-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-xl uppercase tracking-product text-stone-50">
                              {item.name}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-400">
                              {item.tone} tone
                            </p>
                          </div>
                          <p className="text-sm font-medium text-stone-100">
                            {formatCurrency(item.price)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <QuantitySelector
                          value={item.quantity}
                          compact
                          onDecrease={() => updateQuantity(item.key, item.quantity - 1)}
                          onIncrease={() => updateQuantity(item.key, item.quantity + 1)}
                        />
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.key)}
                          className="text-xs uppercase tracking-[0.22em] text-stone-400 transition hover:text-amber-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-stone-200/15 bg-stone-900/50 px-8 text-center">
              <p className="font-display text-3xl text-stone-50">Your cart is still empty.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-stone-300">
                Discover understated pieces designed to be gifted, layered, and worn every day.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full bg-amber-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-950 transition hover:bg-amber-100"
              >
                Shop jewelry
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-stone-200/10 px-6 py-5">
          <div className="flex items-center justify-between text-sm text-stone-300">
            <span>Subtotal</span>
            <span className="text-base font-medium text-stone-50">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-amber-200 px-5 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-stone-950 transition hover:bg-amber-100"
          >
            Checkout coming soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
