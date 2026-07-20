import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/storefront'

const CartDrawer = () => {
  const { items, isCartOpen, subtotal, closeCart, updateQuantity, removeItem } = useCart()

  useEffect(() => {
    if (!isCartOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isCartOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/55 transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-lift transition duration-500 ease-velvet ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="eyebrow text-velmora-muted">Velmora Cart</p>
            <h2 className="mt-2 font-display text-3xl">Your selections</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-line p-2 text-velmora-ink transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article key={item.cartId} className="rounded-3xl bg-white p-5 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-eyebrow text-velmora-muted">{item.category}</p>
                      <Link
                        to={`/product/${item.slug}`}
                        className="block font-display text-2xl tracking-product text-velmora-ink transition duration-300 hover:text-velmora-gold"
                        onClick={closeCart}
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-velmora-muted">{item.variant}</p>
                    </div>
                    <button
                      type="button"
                      className="rounded-full p-2 text-velmora-muted transition duration-300 hover:text-velmora-gold"
                      aria-label={`Remove ${item.shortName}`}
                      onClick={() => removeItem(item.cartId)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-velmora-line px-2 py-2">
                      <button
                        type="button"
                        className="rounded-full p-2 text-velmora-ink transition duration-300 hover:text-velmora-gold"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.cartId, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-6 text-center text-sm font-medium text-velmora-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="rounded-full p-2 text-velmora-ink transition duration-300 hover:text-velmora-gold"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-velmora-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-sm text-velmora-muted">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <button type="button" className="btn-primary w-full justify-center">
                Checkout coming soon <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs leading-6 text-velmora-muted">
                Taxes and shipping are calculated at checkout. Your cart is saved while you browse.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="eyebrow text-velmora-muted">Nothing here yet</p>
            <h3 className="mt-4 font-display text-4xl text-velmora-ink">Start your stack</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-velmora-muted">
              Add your favorite earrings, necklaces, and huggies to build a polished everyday edit.
            </p>
            <Link to="/shop" className="btn-primary mt-8" onClick={closeCart}>
              Browse the shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
