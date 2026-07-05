import { useEffect, useRef } from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQuantity, removeItem } = useCart()
  const containerRef = useRef(null)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 60)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.clearTimeout(t)
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  const productLookup = Object.fromEntries(products.map((p) => [p.id, p]))

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-noir/50 animate-fade-in"
        onClick={closeCart}
        aria-hidden
      />
      <aside
        ref={containerRef}
        className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-ivory text-espresso shadow-elev flex flex-col animate-drawer-in"
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl">Your bag is empty</p>
            <p className="mt-3 text-sm text-taupe max-w-xs">
              Begin with a piece you'll wear every day — or gift one to someone you love.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-outline mt-8"
            >
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 divide-y divide-hairline">
              {items.map((item) => {
                const product = productLookup[item.productId]
                const query = product ? `[${product.imgQuery}]` : 'gold jewelry on dark background'
                return (
                  <li key={item.key} className="py-5 flex gap-4">
                    <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={query}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="product-name truncate">{item.name}</h3>
                          <p className="text-xs text-taupe mt-1">{item.subtitle}</p>
                          <p className="text-xs text-taupe mt-0.5">
                            Tone: <span className="text-espresso capitalize">{item.tone}</span>
                          </p>
                        </div>
                        <p className="text-sm whitespace-nowrap">{formatPrice(item.price)}</p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-cream transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" strokeWidth={1.4} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-cream transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" strokeWidth={1.4} />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove from bag"
                          onClick={() => removeItem(item.key)}
                          className="text-taupe hover:text-espresso transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={1.4} />
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="border-t border-hairline px-6 py-6 bg-ivory">
              <div className="flex items-center justify-between text-sm">
                <span className="text-taupe uppercase tracking-widest2 text-[11px]">Subtotal</span>
                <span className="text-espresso font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-[11px] text-taupe uppercase tracking-widest2">
                Shipping & taxes calculated at checkout
              </p>
              <button type="button" className="btn-primary w-full mt-5">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="block w-full text-center mt-3 text-[11px] uppercase tracking-widest2 text-taupe hover:text-espresso transition-colors"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
