import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, subtotal, updateQuantity, removeItem, itemCount } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-ink/40 z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transform transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-muted">
          <h2 className="font-serif text-2xl text-ink">Your Cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-cream-muted mb-4" />
            <p className="font-serif text-xl text-ink mb-2">Your cart is empty</p>
            <p className="font-sans text-sm text-stone mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <button type="button" onClick={onClose} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream-dark flex-shrink-0 overflow-hidden relative">
                    <span id={`cart-title-${item.id}`} className="sr-only">
                      {item.name}
                    </span>
                    <img
                      data-strk-img-id={`card-${item.id}`}
                      data-strk-img={`[cart-title-${item.id}] ${item.imageQuery}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/products/${item.slug}`}
                        onClick={onClose}
                        className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-stone hover:text-red-600 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-stone uppercase tracking-wide mt-1">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm text-ink mt-2">{formatPrice(item.price)}</p>
                    <div className="inline-flex items-center border border-cream-muted mt-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-2 py-1 text-ink hover:bg-cream-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center font-sans text-xs text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-2 py-1 text-ink hover:bg-cream-muted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-muted px-6 py-6 bg-cream-dark">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-sm text-stone">Subtotal</span>
                <span className="font-sans text-base font-semibold text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-stone mb-5">Shipping and taxes calculated at checkout.</p>
              <button type="button" className="btn-primary w-full mb-3">
                Checkout
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 font-sans text-xs uppercase tracking-wider text-ink hover:text-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
