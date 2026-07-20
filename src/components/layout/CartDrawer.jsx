import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQty, subtotal, count } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

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
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />
      <aside ref={ref} className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-soft animate-drawer-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{' '}
            <span className="text-taupe text-base align-middle">
              ({count})
            </span>
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={close}
            className="text-stone hover:text-ink transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center bg-champagne text-ivory hover:bg-champagne-deep transition-colors px-8 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-sand">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <div className="w-20 h-24 bg-ivory border border-sand overflow-hidden flex-shrink-0">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={item.imgQuery || `[${item.name}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="font-serif text-base text-ink leading-tight">
                            {item.name}
                          </p>
                          <p className="text-xs text-taupe uppercase tracking-widest2 mt-1">
                            {item.variant}
                          </p>
                        </div>
                        <p className="font-sans text-sm text-ink">
                          {formatPrice(item.price * item.qty)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-sand">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="px-2 py-1.5 text-stone hover:text-ink"
                            onClick={() => setQty(item.key, item.qty - 1)}
                          >
                            <Minus size={13} />
                          </button>
                          <span className="px-3 text-sm text-ink min-w-[2ch] text-center">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="px-2 py-1.5 text-stone hover:text-ink"
                            onClick={() => setQty(item.key, item.qty + 1)}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(item.key)}
                          className="text-xs text-taupe hover:text-ink uppercase tracking-widest2 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-5 bg-ivory">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs uppercase tracking-widest2 text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-taupe mb-4">
                Shipping & taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button
                type="button"
                className="w-full bg-champagne text-ivory hover:bg-champagne-deep transition-colors py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={close}
                className="w-full mt-2 py-3 text-xs uppercase tracking-widest2 text-stone hover:text-ink transition-colors"
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
