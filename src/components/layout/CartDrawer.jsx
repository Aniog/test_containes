import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/data/products'
import QuantitySelector from '@/components/shared/QuantitySelector'

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, subtotal, updateQuantity, removeItem } =
    useCart()

  useEffect(() => {
    if (!isCartOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-stone-950/55 backdrop-blur-sm transition ${
          isCartOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-stone-950 text-stone-50 shadow-2xl transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
              Shopping Bag
            </p>
            <h2 className="font-serif text-3xl text-stone-50">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-white/15 p-2 text-stone-100 transition hover:bg-white/5"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-4 text-amber-200">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-stone-50">Elegance awaits</h3>
              <p className="text-sm leading-6 text-stone-300">
                Your cart is empty. Discover demi-fine pieces designed for
                gifting and everyday shine.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-100"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 md:px-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-2xl uppercase tracking-[0.18em] text-stone-50">
                        {item.name}
                      </h3>
                      <p className="text-sm text-stone-300">{item.tone}</p>
                      <p className="text-base font-medium text-amber-200">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-sm uppercase tracking-[0.18em] text-stone-400 transition hover:text-stone-50"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onChange={(quantity) => updateQuantity(item.id, quantity)}
                    />
                    <p className="text-sm text-stone-300">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-white/10 px-5 py-5 md:px-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-stone-300">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-400">
                Taxes and shipping are calculated at checkout. Free worldwide
                shipping on orders over $75.
              </p>
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-amber-200 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-100"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
