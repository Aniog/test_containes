import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { resolveStrkImage } from '@/lib/strkImages'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()
  const drawerRef = useRef(null)

  // Lock body scroll when open
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

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  // Load images for cart line items whenever they change
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      {isOpen && (
        <aside
          ref={drawerRef}
          className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-cream shadow-2xl flex flex-col"
          role="dialog"
          aria-label="Shopping cart"
        >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag{' '}
            <span className="text-stone text-sm align-middle">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-stone/40 mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-ink mb-2">Your bag is empty</p>
              <p className="text-sm text-stone mb-6">Discover pieces made to be treasured.</p>
              <button
                type="button"
                onClick={closeCart}
                className="text-[11px] uppercase tracking-[0.2em] border border-ink px-8 py-3 hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <div className="w-20 h-24 bg-sand overflow-hidden">
                      <img
                        alt={item.name}
                        src={resolveStrkImage(item.imgId) || PLACEHOLDER}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="block text-[11px] uppercase tracking-[0.18em] font-medium text-ink hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-stone mt-1">{item.variant}</p>
                    <p className="text-sm text-ink mt-2">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="text-[10px] uppercase tracking-[0.15em] text-stone hover:text-ink transition-colors"
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
          <div className="border-t border-hairline px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-ink text-cream text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
        </aside>
      )}
    </>
  )
}
