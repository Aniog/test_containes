import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, strkImageUrl } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart()

  // Lock body scroll while open.
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-espresso/50 backdrop-blur-[2px] fade-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory text-ink shadow-2xl drawer-in flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag{' '}
            <span className="text-stone text-base align-middle">
              ({items.reduce((s, i) => s + i.qty, 0)})
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-stone hover:text-ink transition-colors"
          >
            <X width={20} height={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag width={36} height={36} strokeWidth={1} className="text-sand" />
            <p className="font-serif text-2xl">Your bag is empty</p>
            <p className="text-sm text-stone max-w-xs">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 bg-gold text-espresso text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-cream overflow-hidden"
                  >
                    <img
                      src={strkImageUrl(item.imgId)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-[0.12em] leading-tight hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-stone mt-1">Tone: {item.tone}</p>
                    <p className="text-sm mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="px-2 py-1.5 hover:bg-cream transition-colors"
                        >
                          <Minus width={13} height={13} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="px-2 py-1.5 hover:bg-cream transition-colors"
                        >
                          <Plus width={13} height={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-stone hover:text-ink underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">
                Shipping &amp; taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button
                type="button"
                className="w-full bg-gold text-espresso text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-[11px] uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors"
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
