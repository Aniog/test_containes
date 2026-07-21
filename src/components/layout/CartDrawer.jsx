import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StockImage from '@/components/ui/StockImage'

const FREE_SHIPPING_THRESHOLD = 75

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQty, removeItem } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-surface shadow-[0_0_80px_rgba(0,0,0,0.6)] transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <h2 className="font-display text-lg font-medium uppercase tracking-[0.24em] text-velmora-ink">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-1.5 text-velmora-muted transition-colors hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="border-b border-velmora-line px-6 py-4">
          <p className="text-xs tracking-wide text-velmora-muted">
            {remaining > 0 ? (
              <>
                You are{' '}
                <span className="font-semibold text-velmora-gold-light">
                  {formatPrice(remaining)}
                </span>{' '}
                away from free worldwide shipping
              </>
            ) : (
              <span className="font-semibold text-velmora-gold-light">
                Your order ships free, worldwide.
              </span>
            )}
          </p>
          <div className="mt-3 h-px w-full bg-velmora-line">
            <div
              className="h-px bg-velmora-gold transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-10 w-10 text-velmora-line" strokeWidth={1} />
              <p className="font-display text-xl italic text-velmora-muted">
                Your cart is waiting to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline mt-2"
              >
                Discover Jewelry
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-velmora-line">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${line.product.id}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-velmora-bg"
                  >
                    <StockImage
                      imgId={`cart-${line.product.id}`}
                      query={`[product-${line.product.id}-name] [product-${line.product.id}-tagline]`}
                      ratio="4x5"
                      width={300}
                      alt={line.product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${line.product.id}`}
                          onClick={closeCart}
                          className="font-display text-sm font-medium uppercase tracking-[0.14em] text-velmora-ink hover:text-velmora-gold-light"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-velmora-muted">
                          {line.variant} Tone
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-velmora-gold">
                        {formatPrice(line.product.price * line.qty)}
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-velmora-line">
                        <button
                          type="button"
                          className="p-2 text-velmora-muted transition-colors hover:text-velmora-gold"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-velmora-ink">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="p-2 text-velmora-muted transition-colors hover:text-velmora-gold"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" strokeWidth={2} />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="p-2 text-velmora-muted transition-colors hover:text-velmora-gold"
                        onClick={() => removeItem(line.key)}
                        aria-label={`Remove ${line.product.name}`}
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-velmora-line px-6 py-6">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-velmora-muted">
                Subtotal
              </span>
              <span className="font-display text-2xl font-medium text-velmora-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-velmora-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="btn-gold mt-5 w-full"
              onClick={closeCart}
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.24em] text-velmora-muted transition-colors hover:text-velmora-gold"
              onClick={closeCart}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
