import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext'
const getInitials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

const getSafeId = (value) => value.replace(/[^a-zA-Z0-9_-]/g, '-')

export default function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition duration-300 ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/55 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
        aria-label="Close cart"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-editorial transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">
              Your Bag
            </p>
            <h2 className="font-serif text-3xl text-velmora-ink">
              {itemCount} {itemCount === 1 ? 'piece' : 'pieces'}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-bone focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-velmora-line bg-velmora-ivory text-velmora-ink">
              <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-4xl text-velmora-ink">Your bag is waiting.</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">
              Add a piece of demi-fine gold jewelry to begin your Velmora edit.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-7 inline-flex bg-velmora-champagne px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-pearl"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
              <div className="space-y-5">
                {items.map((item) => {
                  const safeId = getSafeId(item.lineId)
                  const titleId = `cart-${safeId}-title`
                  const toneId = `cart-${safeId}-tone`

                  return (
                    <div key={item.lineId} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-line pb-5">
                      <Link to={`/product/${item.slug}`} onClick={closeCart} className="flex aspect-square items-center justify-center overflow-hidden bg-velmora-bone text-velmora-ink">
                        <span className="font-serif text-3xl tracking-[0.12em]" aria-hidden="true">
                          {getInitials(item.name)}
                        </span>
                        <span className="sr-only">{item.name}</span>
                      </Link>
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link to={`/product/${item.slug}`} onClick={closeCart}>
                              <h3 id={titleId} className="font-serif text-base font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                                {item.name}
                              </h3>
                            </Link>
                            <p id={toneId} className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">
                              {item.tone} tone
                            </p>
                          </div>
                          <p className="font-sans text-sm font-bold text-velmora-ink">
                            ${item.price * item.quantity}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="inline-flex items-center border border-velmora-line bg-velmora-ivory text-velmora-ink">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                              className="inline-flex h-9 w-9 items-center justify-center transition hover:bg-velmora-bone"
                              aria-label={`Decrease quantity for ${item.name}`}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                              className="inline-flex h-9 w-9 items-center justify-center transition hover:bg-velmora-bone"
                              aria-label={`Increase quantity for ${item.name}`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.lineId)}
                            className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-taupe underline-offset-4 transition hover:text-velmora-ink hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-velmora-line bg-velmora-ivory px-5 py-6 sm:px-7">
              <div className="flex items-center justify-between text-velmora-ink">
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Subtotal</span>
                <span className="font-serif text-3xl">${subtotal}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-velmora-taupe">
                Shipping and taxes are calculated at checkout. Free worldwide shipping is included.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
              >
                Checkout Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
