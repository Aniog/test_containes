import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const {
    cartItems,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-espresso/55 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Close cart overlay"
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-soft transition-transform duration-500 sm:border-l sm:border-velmora-sand/70 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/70 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">
              Velmora Cart
            </p>
            <h2 className="font-serif text-2xl text-velmora-espresso">Your pieces</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-sand p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-bronze"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-velmora-sand/70 bg-velmora-ivory px-6 text-center text-velmora-espresso">
              <ShoppingBag className="mb-5 text-velmora-gold" size={34} />
              <h3 className="font-serif text-2xl">Your cart is waiting</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-cacao/75">
                Add a luminous everyday piece or a gift-boxed set to begin.
              </p>
              <Link
                to="/shop"
                className="mt-6 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-porcelain transition hover:bg-velmora-cacao"
                onClick={closeCart}
              >
                Shop jewelry
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <article
                  key={`${item.productId}-${item.tone}`}
                  className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-sand/70 pb-5"
                >
                  <Link to={`/product/${item.product.id}`} onClick={closeCart}>
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-velmora-cacao text-center text-velmora-porcelain shadow-soft">
                      <span className="px-3 font-serif text-xl uppercase tracking-[0.18em]">
                        {item.product.name.split(' ').slice(0, 2).map((word) => word[0]).join('')}
                      </span>
                    </div>
                  </Link>
                  <div className="min-w-0 text-velmora-espresso">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-serif text-sm uppercase tracking-[0.18em] transition hover:text-velmora-bronze"
                      onClick={closeCart}
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-xs text-velmora-cacao/70">{item.tone} tone</p>
                    <p className="mt-2 text-sm font-semibold">${item.product.price}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-porcelain">
                        <button
                          type="button"
                          className="p-2 text-velmora-espresso transition hover:text-velmora-bronze"
                          aria-label={`Decrease ${item.product.name} quantity`}
                          onClick={() =>
                            updateQuantity(item.productId, item.tone, item.quantity - 1)
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span className="min-w-7 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          className="p-2 text-velmora-espresso transition hover:text-velmora-bronze"
                          aria-label={`Increase ${item.product.name} quantity`}
                          onClick={() =>
                            updateQuantity(item.productId, item.tone, item.quantity + 1)
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-bronze underline-offset-4 transition hover:text-velmora-espresso hover:underline"
                        onClick={() => removeFromCart(item.productId, item.tone)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand/70 bg-velmora-ivory px-6 py-6 text-velmora-espresso">
          <div className="flex items-center justify-between font-serif text-2xl">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-sm text-velmora-cacao/75">
            Shipping and taxes are calculated at checkout. Free shipping is always included.
          </p>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-bronze hover:text-velmora-porcelain"
          >
            Checkout later
          </button>
        </div>
      </aside>
    </div>
  )
}
