import { ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { formatCurrency } from '../../lib/format.js'
import { getProductBySlug } from '../../lib/store-data.js'
import QuantitySelector from '../shared/QuantitySelector.jsx'

function CartDrawer({ open, onClose }) {
  const { items, subtotal, removeItem, updateItemQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-[70] transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-espresso/45 transition duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-label="Close cart"
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-mist shadow-soft transition duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-overline text-velmora-taupe">Your cart</p>
            <h2 className="font-display text-3xl text-velmora-espresso">Curated selections</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-line"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-velmora-ivory text-velmora-espresso">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-3xl text-velmora-espresso">Your cart is empty</h3>
              <p className="mt-2 text-sm leading-6 text-velmora-taupe">
                Add a few Velmora favorites and they will appear here instantly.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={onClose}
              className="rounded-full bg-velmora-gold px-6 py-3 text-sm font-semibold uppercase tracking-overline text-velmora-espresso transition hover:opacity-90"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item, index) => {
                const product = getProductBySlug(item.slug)
                const idBase = `cart-${item.key}-${index}`
                const titleId = `${idBase}-title`
                const descId = `${idBase}-desc`
                const categoryId = `${idBase}-category`
                const shotId = `${idBase}-shot`

                if (!product) {
                  return null
                }

                return (
                  <article key={item.key} className="grid grid-cols-[96px,1fr] gap-4 rounded-panel border border-velmora-line bg-white p-3 shadow-card">
                    <div className="relative aspect-product overflow-hidden rounded-2xl bg-velmora-ivory">
                      <span id={shotId} className="sr-only">{product.shotLabels[0]}</span>
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="h-full w-full object-cover"
                        data-strk-img-id={`${idBase}-image`}
                        data-strk-img={`[${shotId}] [${descId}] [${titleId}] [${categoryId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="400"
                      />
                    </div>
                    <div className="min-w-0">
                      <p id={categoryId} className="text-xs uppercase tracking-overline text-velmora-taupe">{product.category}</p>
                      <h3 id={titleId} className="mt-2 font-display text-xl uppercase tracking-product text-velmora-espresso">
                        {item.name}
                      </h3>
                      <p id={descId} className="mt-2 text-sm leading-6 text-velmora-taupe">{item.variant}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <QuantitySelector
                          quantity={item.quantity}
                          onDecrease={() => updateItemQuantity(item.key, item.quantity - 1)}
                          onIncrease={() => updateItemQuantity(item.key, item.quantity + 1)}
                          compact
                        />
                        <span className="text-sm font-medium text-velmora-espresso">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="mt-3 text-xs uppercase tracking-overline text-velmora-taupe transition hover:text-velmora-espresso"
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="border-t border-velmora-line bg-white px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-velmora-taupe">
                <span>Subtotal</span>
                <span className="font-medium text-velmora-espresso">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-taupe">
                Shipping and taxes are calculated at checkout. Real checkout can be connected later.
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-full bg-velmora-gold px-6 py-3 text-sm font-semibold uppercase tracking-overline text-velmora-espresso transition hover:opacity-90"
              >
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
