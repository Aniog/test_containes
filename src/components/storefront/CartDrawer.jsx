import { Link } from 'react-router-dom'
import { ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '../../data/storefront'
import { useCart } from '../../context/CartContext'
import QuantitySelector from './QuantitySelector'

function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, subtotal, clearCart } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-editorial ${
        isCartOpen ? 'pointer-events-auto bg-ink/35' : 'pointer-events-none bg-transparent'
      }`}
      onClick={closeCart}
      aria-hidden={!isCartOpen}
    >
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-velvet transition-transform duration-500 ease-editorial ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-mist px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-ink" />
            <div>
              <p className="text-xs uppercase tracking-editorial text-truffle">Shopping Bag</p>
              <h2 className="mt-1 font-display text-3xl text-ink">Your Cart</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-mist p-3 text-ink transition-colors duration-300 ease-editorial hover:bg-shell"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="text-xs uppercase tracking-editorial text-truffle">Curated essentials await</p>
            <h3 className="mt-4 font-display text-4xl text-ink">Your cart is empty</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-truffle">
              Add a piece you love and we&apos;ll keep it ready for gifting or keeping.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-brass hover:text-ivory"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6 sm:px-8">
              {items.map((item) => (
                <article key={item.id} className="rounded-[1.5rem] border border-mist bg-glow p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-editorial text-truffle">{item.category}</p>
                      <Link to={`/product/${item.slug}`} onClick={closeCart}>
                        <h3 className="mt-2 font-display text-2xl uppercase tracking-luxury text-ink">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="mt-3 text-sm text-truffle">{item.variant}</p>
                      <p className="mt-3 text-sm font-medium uppercase tracking-editorial text-ink">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs uppercase tracking-editorial text-truffle transition-colors duration-300 ease-editorial hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5">
                    <QuantitySelector
                      quantity={item.quantity}
                      onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-mist px-6 py-6 sm:px-8">
              <div className="flex items-center justify-between text-sm uppercase tracking-editorial text-ink">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-truffle">
                Taxes and duties calculated at checkout. Checkout integration can be added next.
              </p>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-brass hover:text-ivory"
              >
                Checkout Coming Soon
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full rounded-full border border-mist px-6 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-shell"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
