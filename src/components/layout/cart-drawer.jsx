import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import Button from '@/components/ui/button'
import ProductImage from '@/components/product/product-image'
import { formatPrice } from '@/data/products'
import { useCart } from '@/lib/cart'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const {
    items,
    subtotal,
    count,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart()

  const containerRef = useRef(null)

  useEffect(() => {
    if (!isCartOpen) return undefined
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [isCartOpen, items])

  if (!isCartOpen) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 animate-overlay-in bg-ink/50 backdrop-blur-sm"
      />
      <aside className="animate-drawer-in absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-[0_24px_60px_-24px_rgba(28,23,16,0.45)]">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl font-medium text-ink">
            Your Cart{' '}
            <span className="text-sm font-sans text-mocha">
              ({count} {count === 1 ? 'item' : 'items'})
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-ink transition-colors hover:text-gold-deep"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-line" strokeWidth={1} />
            <div>
              <p className="font-serif text-2xl font-medium text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-mocha">
                Discover pieces crafted to be treasured.
              </p>
            </div>
            <Button variant="primary" size="lg" onClick={closeCart}>
              <Link to="/shop" className="text-inherit no-underline">
                Shop the Collection
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="block h-28 w-[5.5rem] shrink-0 overflow-hidden bg-sand"
                  >
                    <ProductImage product={item.product} index={0} width={200} />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold-deep"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-xs text-mocha">{item.variant} Tone</p>
                      </div>
                      <p className="text-sm font-semibold text-ink">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-2 text-mocha transition-colors hover:text-ink"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-2 text-mocha transition-colors hover:text-ink"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] font-semibold uppercase tracking-luxe text-mocha underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line bg-sand/60 px-6 py-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-luxe text-mocha">
                  Subtotal
                </span>
                <span className="font-serif text-xl font-medium text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-5 text-xs leading-relaxed text-mocha">
                Free worldwide shipping and 30-day returns on every order.
              </p>
              <Button variant="gold" size="lg" className="w-full">
                Checkout
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-4 w-full text-center text-[11px] font-semibold uppercase tracking-luxe text-mocha transition-colors hover:text-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
