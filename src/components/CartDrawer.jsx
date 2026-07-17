import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { StrkImg } from '@/components/StrkImage'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  // Scan the drawer for stock images whenever it opens or its items change.
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const timer = window.setTimeout(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      }
    }, 450)
    return () => window.clearTimeout(timer)
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
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-soft flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{' '}
            <span className="text-sand text-base">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-10 h-10 text-hairline" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm text-sand">Discover pieces made to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 inline-block bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium px-8 py-4 hover:bg-gold-soft transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-20 bg-cream overflow-hidden"
                  >
                    <StrkImg
                      imgId={item.imgId}
                      query={`[${item.descId}] [${item.titleId}]`}
                      ratio="1x1"
                      width={160}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        id={item.titleId}
                        className="font-serif text-base text-ink uppercase tracking-widest3 leading-tight hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm text-ink font-medium whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <p id={item.descId} className="sr-only">
                      {item.shortDesc}
                    </p>
                    <p className="text-xs text-sand mt-1 capitalize">{item.tone} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-sand hover:text-ink underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest2 text-sand">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-sand">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold text-ivory text-[11px] uppercase tracking-widest2 font-medium py-4 hover:bg-gold-soft transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-widest2 text-ink underline underline-offset-4 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
