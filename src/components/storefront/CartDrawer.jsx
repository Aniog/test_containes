import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, products } from '@/data/storeData'
import QuantitySelector from './QuantitySelector'

const CartDrawer = () => {
  const { isCartOpen, closeCart, items, subtotal, updateQuantity, removeItem } = useCart()

  return (
    <div>
      <div
        className={`velmora-cart-overlay ${isCartOpen ? 'is-open' : 'is-closed'}`}
        onClick={closeCart}
      />
      <aside
        className={`velmora-cart-drawer ${isCartOpen ? 'is-open' : 'is-closed'}`}
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-luxe text-velmora-gold">Your cart</p>
            <h2 className="mt-2 font-display text-3xl text-velmora-ink">Velmora bag</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-sand text-velmora-smoke transition hover:border-velmora-gold hover:text-velmora-ink"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-4xl text-velmora-ink">Your bag is still empty.</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-velmora-smoke">
                Add a few Velmora favorites to build your polished everyday stack.
              </p>
              <Link to="/shop" onClick={closeCart} className="mt-6 velmora-button">
                Shop now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => {
                const product = products.find((entry) => entry.id === item.productId)
                const imageAlt = product?.name || item.name
                const titleId = `cart-item-${item.lineId}-title`
                const descId = `cart-item-${item.lineId}-desc`
                return (
                  <article
                    key={item.lineId}
                    className="flex items-start gap-4 rounded-[1.75rem] border border-velmora-sand bg-velmora-ivory p-4"
                  >
                    <div className="flex h-28 w-24 shrink-0 items-end overflow-hidden rounded-[1.25rem] border border-velmora-sand bg-gradient-to-b from-velmora-sand to-velmora-card p-3">
                      <div className="w-full rounded-[1rem] border border-white/70 bg-velmora-ivory/90 px-2 py-3 text-center shadow-soft">
                        <p className="text-[10px] uppercase tracking-widest text-velmora-gold">
                          Velmora
                        </p>
                        <p className="mt-2 font-display text-xl leading-none text-velmora-ink">
                          {product?.category?.[0] || item.category?.[0] || 'V'}
                        </p>
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3
                            id={titleId}
                            className="font-display text-lg uppercase leading-tight tracking-[0.12em] text-velmora-ink sm:text-xl"
                          >
                            {item.name}
                          </h3>
                          <p id={descId} className="mt-2 text-[11px] uppercase tracking-[0.22em] text-velmora-smoke">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-velmora-smoke transition hover:text-velmora-ink"
                          onClick={() => removeItem(item.lineId)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(quantity) => updateQuantity(item.lineId, quantity)}
                        />
                        <p className="text-sm font-medium text-velmora-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand px-6 py-5">
          <div className="flex items-center justify-between text-sm uppercase tracking-widest text-velmora-smoke">
            <span>Subtotal</span>
            <span className="text-velmora-ink">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="mt-4 w-full velmora-button-dark" disabled={items.length === 0}>
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-6 text-velmora-smoke">
            Taxes and shipping are calculated at checkout.
          </p>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
