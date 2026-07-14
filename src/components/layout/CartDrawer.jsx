import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import QuantitySelector from '@/components/common/QuantitySelector'
import { useStore } from '@/context/StoreContext'

const CartDrawer = () => {
  const {
    cart,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useStore()

  if (!isCartOpen) {
    return null
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/45 transition duration-300"
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-luxury transition duration-300"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold">
              Cart
            </p>
            <h2 className="mt-2 font-display text-3xl">Your Selection</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-line"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length ? (
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={`${item.productId}-${item.tone}`}
                  className="rounded-[1.75rem] border border-velmora-line bg-white/60 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-display text-2xl uppercase tracking-[0.18em] text-velmora-ink"
                        onClick={() => setIsCartOpen(false)}
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-2 text-sm text-velmora-muted">{item.tone} tone</p>
                      <p className="mt-1 text-sm text-velmora-muted">${item.product.price} each</p>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-velmora-muted underline-offset-4 transition hover:text-velmora-ink hover:underline"
                      onClick={() => removeFromCart(item.productId, item.tone)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(quantity) =>
                        updateQuantity(item.productId, item.tone, quantity)
                      }
                    />
                    <p className="text-base font-medium text-velmora-ink">${item.lineTotal}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-velmora-line bg-velmora-soft p-8 text-center">
              <h3 className="font-display text-3xl text-velmora-ink">Your cart is empty</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-muted">
                Add a piece you love and it will appear here with quantity controls ready.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex rounded-full bg-velmora-panel px-5 py-3 text-sm font-medium text-velmora-cream"
                onClick={() => setIsCartOpen(false)}
              >
                Explore the collection
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line px-6 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.26em] text-velmora-muted">
            <span>Subtotal</span>
            <span className="text-velmora-ink">${subtotal}</span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-velmora-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-panel transition hover:brightness-95"
          >
            Checkout Soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
