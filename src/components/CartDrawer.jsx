import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const ref = useStrkImages([items, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-md flex-col bg-cream shadow-soft transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Cart{' '}
            <span className="text-sm text-muted">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink-soft transition-colors hover:text-gold-deep"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={36} className="text-sand" strokeWidth={1.2} />
              <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted">
                Discover pieces made to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center bg-gold px-7 py-3.5 text-xs uppercase tracking-wide2 text-cream transition-colors hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => {
                return (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-cream-deep"
                  >
                    <img
                      src={PLACEHOLDER}
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-base text-ink">{item.name}</p>
                        <p className="text-[11px] uppercase tracking-wide2 text-muted">
                          {item.tone}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-wide2 text-muted transition-colors hover:text-gold-deep"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink-soft transition-colors hover:text-gold-deep"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-7 text-center text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink-soft transition-colors hover:text-gold-deep"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide2 text-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-[11px] text-muted">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-xs uppercase tracking-wide2 text-cream transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] uppercase tracking-wide2 text-ink-soft transition-colors hover:text-gold-deep"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
