import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn, getImageUrl } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

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

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm transition-opacity duration-400',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-soft flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide">
            Your Cart{' '}
            <span className="text-stone text-base">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-champagne transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
              <ShoppingBag size={40} className="text-line" strokeWidth={1} />
              <p className="font-serif text-2xl text-ink">Your cart is empty</p>
              <p className="text-sm text-stone max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-2 inline-flex items-center justify-center px-7 py-3.5 text-xs font-medium uppercase tracking-widest2 bg-ink text-ivory hover:bg-espresso transition-colors duration-300"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.tone}`}
                  className="flex gap-4"
                >
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="w-20 h-24 bg-cream shrink-0 overflow-hidden"
                  >
                    <img
                      src={getImageUrl(item.product.imgId)}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <h3
                      id={`cart-title-${item.productId}`}
                      className="font-serif text-base uppercase tracking-widest2 text-ink leading-tight"
                    >
                      {item.product.name}
                    </h3>
                    <p
                      id={`cart-tag-${item.productId}`}
                      className="text-xs text-stone mt-1"
                    >
                      {item.tone} · {item.product.category}
                    </p>
                    <p className="text-sm text-ink mt-2 font-medium">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 hover:bg-cream transition-colors"
                          onClick={() =>
                            updateQuantity(item.productId, item.tone, item.quantity - 1)
                          }
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-sm tabular-nums w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 hover:bg-cream transition-colors"
                          onClick={() =>
                            updateQuantity(item.productId, item.tone, item.quantity + 1)
                          }
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.tone)}
                        className="text-xs text-stone hover:text-ink underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5 space-y-4 bg-cream">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest2 text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-7 py-4 text-xs font-medium uppercase tracking-widest2 bg-ink text-ivory hover:bg-espresso transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-center text-xs uppercase tracking-widest2 text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
