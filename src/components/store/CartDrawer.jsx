import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/components/store/CartProvider'
import { products } from '@/lib/store-data'
import { formatPrice } from '@/lib/format'

const productMap = Object.fromEntries(products.map((product) => [product.slug, product]))

export default function CartDrawer() {
  const location = useLocation()
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-velmora-ink/35 backdrop-blur-sm transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-line/70 bg-velmora-paper text-velmora-ink shadow-2xl transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-line/70 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-editorial text-velmora-muted">Shopping Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-line/70 p-2 text-velmora-ink transition hover:border-velmora-accent hover:text-velmora-accent"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => {
                const product = productMap[item.slug]
                if (!product) return null

                return (
                  <div
                    key={item.id}
                    className="rounded-[1.75rem] border border-velmora-line/70 bg-velmora-ivory px-4 py-4 shadow-velmora-card"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-editorial text-velmora-muted">
                          {product.category}
                        </p>
                        <h3 className="mt-1 font-serif text-2xl uppercase tracking-product text-velmora-ink">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-velmora-muted">{item.tone}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-velmora-muted transition hover:text-velmora-ink"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="inline-flex items-center rounded-full border border-velmora-line/70 bg-velmora-paper p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-sand"
                          aria-label={`Decrease ${product.name} quantity`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-10 text-center text-sm font-medium text-velmora-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-sand"
                          aria-label={`Increase ${product.name} quantity`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-velmora-ink">
                        {formatPrice(product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-velmora-line/70 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-velmora-muted">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-velmora-muted">
                Checkout is coming soon. Your cart is ready to connect to a real payment flow later.
              </p>
              <Link
                to={location.pathname === '/shop' ? '/shop' : '/shop'}
                onClick={closeCart}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-velmora-accent px-4 py-3.5 text-sm font-semibold text-velmora-ink transition hover:bg-velmora-accent-deep"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-sand text-velmora-ink">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velmora-ink">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-velmora-muted">
              Add a few Velmora favorites and your shopping bag will be waiting here.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 rounded-full border border-velmora-line/70 px-5 py-3 text-sm font-semibold text-velmora-ink transition hover:border-velmora-accent hover:text-velmora-accent"
            >
              Browse the collection
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
