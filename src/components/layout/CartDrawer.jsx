import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import QuantitySelector from '@/components/common/QuantitySelector.jsx'

const formatPrice = (price) => `$${price}`

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-ivory text-ink shadow-2xl transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5 md:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Your Bag</p>
            <h2 className="font-display text-3xl text-ink">Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-line bg-transparent p-3 text-ink transition hover:bg-sand"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 md:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <p className="font-display text-4xl text-ink">Your cart is empty.</p>
              <p className="max-w-sm text-sm leading-7 text-muted">
                Add a few Velmora pieces to begin building your edit.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="rounded-full border border-ink bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-bronze hover:text-ink"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <article
                  key={`${item.productId}-${item.tone}`}
                  className="rounded-[1.5rem] border border-line bg-white/70 p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 items-center justify-center rounded-2xl bg-sand px-3 text-center">
                      <span className="font-display text-lg uppercase tracking-[0.16em] text-ink">
                        {item.product.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                            {item.tone}
                          </p>
                          <p className="mt-1 font-display text-2xl uppercase tracking-[0.18em] text-ink">
                            {item.product.name}
                          </p>
                          <p className="mt-2 text-sm text-muted">{formatPrice(item.product.price)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.productId, item.tone)}
                          className="text-xs uppercase tracking-[0.2em] text-muted transition hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>
                      <QuantitySelector
                        value={item.quantity}
                        onDecrease={() =>
                          updateQuantity(item.productId, item.tone, item.quantity - 1)
                        }
                        onIncrease={() =>
                          updateQuantity(item.productId, item.tone, item.quantity + 1)
                        }
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-line px-5 py-5 md:px-7">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em] text-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full border border-ink bg-ink px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-bronze hover:text-ink"
          >
            Checkout Coming Soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
