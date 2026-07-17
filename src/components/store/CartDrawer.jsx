import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { cartItems, subtotal, isCartOpen, closeCart, removeItem, updateQuantity } =
    useCart()

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/45 transition duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-ink shadow-soft transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-mocha/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-mocha">Shopping bag</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mocha/15 bg-ivory text-ink transition hover:bg-sand"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length ? (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => {
                const titleId = `cart-${item.id}-${item.variant}-title`
                const categoryId = `cart-${item.id}-${item.variant}-category`
                return (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 rounded-[1.5rem] border border-mocha/10 bg-sand/45 p-4"
                  >
                    <div className="flex h-28 w-24 flex-col justify-between overflow-hidden rounded-[1.25rem] border border-mocha/10 bg-gradient-to-br from-sand via-ivory to-sand p-3 text-left shadow-card">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-mocha">
                        {item.category}
                      </p>
                      <div>
                        <p className="font-display text-lg uppercase leading-tight tracking-[0.16em] text-ink">
                          {item.variant}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-mocha">
                          Velmora
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p id={categoryId} className="text-[11px] uppercase tracking-[0.28em] text-mocha">
                            {item.category}
                          </p>
                          <h3 id={titleId} className="mt-2 font-display text-xl uppercase tracking-[0.18em] text-ink">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm text-mocha">{item.variant} tone</p>
                        </div>
                        <p className="text-sm text-ink">${item.price}</p>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-mocha/15 bg-ivory px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink transition hover:bg-sand"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink transition hover:bg-sand"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs uppercase tracking-[0.24em] text-mocha transition hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-mocha/10 px-6 py-6">
              <div className="flex items-center justify-between text-sm text-mocha">
                <span>Subtotal</span>
                <span className="text-xl font-medium text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-mocha">
                Shipping and taxes calculated at checkout. Your pieces are packed in signature Velmora boxes.
              </p>
              <div className="mt-6 grid gap-3">
                <button
                  type="button"
                  className="rounded-full bg-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-champagne"
                >
                  Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-mocha/15 px-5 py-4 text-sm uppercase tracking-[0.24em] text-ink transition hover:bg-sand"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-ink">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-ink">Your cart is empty</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-mocha">
              Begin with bestselling earrings, refined necklaces, or polished huggies curated for everyday luxury.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-champagne"
            >
              Shop Bestsellers
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}
