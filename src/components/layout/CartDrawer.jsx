import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/format.js'

const CartDrawer = () => {
  const { items, subtotal, isCartOpen, closeCart, updateQuantity, removeItem } = useCart()

  useEffect(() => {
    if (!isCartOpen) {
      return undefined
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  if (!isCartOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={closeCart}
        className="absolute inset-0 bg-espresso/45 backdrop-blur-sm"
      />

      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-espresso shadow-2xl"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-champagne/35 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Your cart</p>
            <h2 className="mt-2 font-serif text-3xl">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-champagne/40 p-2 text-espresso transition hover:border-gold hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full bg-champagne/20 p-4 text-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-espresso">Your selection awaits</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-ink-soft">
              Add a few luminous pieces to your cart and build a stack worth treasuring.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-ivory transition hover:bg-truffle"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article key={item.lineId} className="rounded-3xl border border-champagne/35 bg-white/80 p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{item.category}</p>
                      <Link to={`/product/${item.slug}`} onClick={closeCart} className="mt-2 block font-serif text-xl uppercase tracking-[0.22em] text-espresso">
                        {item.name}
                      </Link>
                      <p className="mt-2 text-sm text-ink-soft">{item.variant}</p>
                    </div>
                    <p className="text-sm font-medium text-espresso">{formatPrice(item.price)}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-champagne/40 bg-ivory">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        className="p-2 text-espresso transition hover:text-gold"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium text-espresso">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        className="p-2 text-espresso transition hover:text-gold"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId)}
                      className="text-xs uppercase tracking-[0.24em] text-ink-soft transition hover:text-gold"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-champagne/35 px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-ink-soft">
                <span>Subtotal</span>
                <span className="text-lg font-medium tracking-normal text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                Taxes and duties are calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-ivory transition hover:bg-truffle"
              >
                Checkout soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
