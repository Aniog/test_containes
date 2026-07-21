import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import CartThumbnail from './CartThumbnail'

export default function CartDrawer({
  cartItems,
  isOpen,
  onClose,
  onRemove,
  onUpdateQuantity,
}) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-editorial transition duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-hairline px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-brass">Velmora Bag</p>
            <h2 className="font-serifDisplay text-3xl leading-none text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-hairline p-3 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6 rounded-full bg-velmora-champagne p-5 text-velmora-brass">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serifDisplay text-3xl text-velmora-ink">Your bag is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-muted">
                Add a golden everyday piece or a gift-ready set to begin your Velmora ritual.
              </p>
              <Link
                to="/shop"
                onClick={onClose}
                className="mt-8 rounded-full bg-velmora-gold px-7 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-brass hover:text-velmora-ivory"
              >
                Shop Jewelry
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map(({ product, quantity, tone }) => (
                <div key={`${product.id}-${tone}`} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-hairline pb-5">
                  <Link to={`/product/${product.slug}`} onClick={onClose} className="block overflow-hidden bg-velmora-champagne">
                    <CartThumbnail product={product} />
                  </Link>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serifDisplay text-base uppercase leading-snug tracking-luxury text-velmora-ink">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-luxury text-velmora-muted">{tone} tone</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(product.id, tone)}
                        className="rounded-full p-2 text-velmora-muted transition hover:bg-velmora-champagne hover:text-velmora-ink"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-hairline bg-velmora-porcelain">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, tone, quantity - 1)}
                          className="p-2 text-velmora-ink transition hover:text-velmora-brass"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-velmora-ink">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(product.id, tone, quantity + 1)}
                          className="p-2 text-velmora-ink transition hover:text-velmora-brass"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-semibold text-velmora-ink">{formatPrice(product.price * quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-velmora-hairline bg-velmora-porcelain px-5 py-6 sm:px-7">
            <div className="mb-4 flex items-center justify-between text-sm text-velmora-muted">
              <span>Subtotal</span>
              <span className="text-lg font-semibold text-velmora-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-5 text-xs leading-5 text-velmora-muted">
              Complimentary worldwide shipping and 30-day returns are included.
            </p>
            <button
              type="button"
              className="w-full rounded-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
            >
              Continue to Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
