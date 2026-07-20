import { ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../lib/products'
import QuantitySelector from '../common/QuantitySelector'
import { useCart } from './CartContext'

export default function CartDrawer() {
  const {
    closeCart,
    isCartOpen,
    items,
    removeItem,
    subtotal,
    updateItemQuantity,
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
        aria-label="Close cart"
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/45 transition duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-porcelain text-ink shadow-soft transition duration-300 ease-luxe ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-sandDeep/70 px-6 py-5">
          <div>
            <p className="eyebrow">Your cart</p>
            <h2 className="mt-2 font-display text-3xl text-ink">
              A polished final touch
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-sandDeep/70 p-2 text-ink transition hover:border-rosewood hover:text-rosewood"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="rounded-full bg-sand p-4 text-rosewood">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-display text-3xl text-ink">Your cart is empty</h3>
            <p className="max-w-xs text-sm text-ink/70">
              Add a few Velmora favorites and they will appear here instantly.
            </p>
            <Link to="/shop" className="luxe-button" onClick={closeCart}>
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={item.cartKey}
                  className="surface-card rounded-2xl p-5 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-display text-lg uppercase tracking-luxe text-ink"
                      >
                        {item.shortName}
                      </Link>
                      <p className="mt-2 text-sm text-ink/70">{item.variant}</p>
                      <p className="mt-1 text-sm text-ink/70">{item.material}</p>
                    </div>
                    <p className="text-sm font-medium text-ink">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(nextQuantity) =>
                        updateItemQuantity(item.cartKey, nextQuantity)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => removeItem(item.cartKey)}
                      className="text-sm text-rosewood transition hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-sandDeep/70 bg-porcelain px-6 py-6">
              <div className="flex items-center justify-between text-sm text-ink/70">
                <span>Subtotal</span>
                <span className="text-xl font-medium text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink/70">
                Duties and taxes calculated at checkout. Real checkout can be
                connected next.
              </p>
              <button type="button" className="luxe-button mt-5 w-full">
                Proceed to Checkout
              </button>
              <button
                type="button"
                className="luxe-button-secondary mt-3 w-full"
                onClick={closeCart}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
