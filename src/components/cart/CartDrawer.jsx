import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'
import ProductImage from '@/components/shared/ProductImage'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } =
    useCart()
  const drawerRef = useRef(null)
  const closeBtnRef = useRef(null)

  // Lock scroll, focus close button, ESC to close
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeBtnRef.current?.focus())

    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeCart])

  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8
  const total = subtotal + shipping
  const progressToFreeShip = Math.min(100, (subtotal / 75) * 100)

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <div
        className="absolute inset-0 bg-ink-900/55 backdrop-blur-[2px]"
        onClick={closeCart}
      />

      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          'absolute top-0 right-0 bottom-0 w-full sm:w-[440px] bg-ivory-50 text-ink-900 shadow-2xl flex flex-col transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-ink-900/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" strokeWidth={1.4} />
            <h2 className="font-serif text-[20px]">Your bag</h2>
            <span className="text-[12px] text-ink-500">({count})</span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-70"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {subtotal > 0 && subtotal < 75 && (
          <div className="px-6 py-4 bg-cream/60 border-b border-ink-900/10">
            <p className="text-[12px] text-ink-700">
              Add <span className="font-medium text-ink-900">{formatPrice(75 - subtotal)}</span> more for free worldwide shipping.
            </p>
            <div className="mt-2 h-[2px] bg-ink-900/10 overflow-hidden">
              <div
                className="h-full bg-gold-400 transition-[width] duration-500"
                style={{ width: `${progressToFreeShip}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
              <div className="w-14 h-14 rounded-full border border-ink-900/20 flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-ink-500" strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-[24px] mb-2">Your bag is empty</h3>
              <p className="text-[13px] text-ink-500 mb-8 max-w-[260px]">
                Discover the collection — demi-fine pieces, made to layer and to keep.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-outline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="px-6 divide-y divide-ink-900/10">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.variant}`}
                  className="py-5 flex gap-4"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="block w-20 h-24 flex-shrink-0 overflow-hidden bg-ink-900"
                  >
                    <ProductImage art={item.art} />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="product-name truncate">{item.name}</p>
                        <p className="mt-1 text-[12px] text-ink-500 truncate">
                          {item.subtitle}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                          {item.variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                      </div>
                      <p className="text-[14px] font-medium text-ink-900 whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink-900/20">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center hover:bg-ink-900/5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-[13px]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center hover:bg-ink-900/5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[11px] uppercase tracking-[0.22em] text-ink-500 hover:text-ink-900 underline-offset-4 hover:underline"
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

        {items.length > 0 && (
          <footer className="border-t border-ink-900/10 px-6 py-5 space-y-3 bg-ivory-50">
            <div className="flex items-center justify-between text-[13px] text-ink-700">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-[13px] text-ink-700">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-ink-900/10">
              <span className="text-[14px] font-medium text-ink-900">Total</span>
              <span className="font-serif text-[24px] text-ink-900">
                {formatPrice(total)}
              </span>
            </div>
            <button type="button" className="btn-primary w-full mt-3">
              Checkout
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center text-[11px] uppercase tracking-[0.22em] text-ink-500 hover:text-ink-900 py-2"
            >
              Continue shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}
