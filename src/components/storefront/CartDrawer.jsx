import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/products'

function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-umber/45 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-espresso text-pearl shadow-luxe transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-hairline-light px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-pearl/60">
              Shopping bag
            </p>
            <h2 className="mt-1 font-serif text-3xl text-pearl">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-light text-pearl transition hover:border-gold hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-hairline-light text-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-pearl">
              Your bag is still empty
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-pearl/70">
              Add a few Velmora pieces and we’ll keep them ready here while you browse.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-umber transition hover:bg-gold-deep"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={item.lineId}
                  className="rounded-[1.75rem] border border-hairline-light bg-walnut p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.24em] text-gold">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-2xl uppercase tracking-[0.18em] text-pearl">
                        {item.name}
                      </h3>
                      <p className="text-sm text-pearl/68">Tone: {item.tone}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId)}
                      className="text-xs uppercase tracking-[0.22em] text-pearl/60 transition hover:text-gold"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-pearl/70">
                    {item.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-hairline-light">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        className="inline-flex h-10 w-10 items-center justify-center text-pearl transition hover:text-gold"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-pearl">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        className="inline-flex h-10 w-10 items-center justify-center text-pearl transition hover:text-gold"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-[0.18em] text-pearl">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-hairline-light px-6 py-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-pearl/76">
                <span>Subtotal</span>
                <span className="text-pearl">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-pearl/62">
                Taxes and shipping are calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-umber transition hover:bg-gold-deep"
              >
                Checkout coming soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
