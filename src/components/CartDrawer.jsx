import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StrkImage from '@/components/StrkImage'
import ImageLoader from '@/components/ImageLoader'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, count } = useCart()

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
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{' '}
            <span className="text-muted text-sm font-sans">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
              <ShoppingBag className="w-10 h-10 text-sand" />
              <p className="font-serif text-xl text-ink">Your bag is empty</p>
              <p className="text-sm text-muted max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 bg-gold text-ivory text-xs uppercase tracking-widest2 px-8 py-3 hover:bg-gold-soft transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <ImageLoader deps={[items, isOpen]} className="flex-1 overflow-y-auto px-6">
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <div className="w-20 h-24 bg-cream overflow-hidden">
                      <StrkImage
                        imgId={item.imgId}
                        query={`[${item.descId}] [${item.titleId}]`}
                        ratio="3x4"
                        width={160}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-sm uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-muted hover:text-ink transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted mt-1 capitalize">{item.tone} tone</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2rem] text-center">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-sm text-ink font-medium">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </ImageLoader>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest2 text-muted">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">
              Shipping & taxes calculated at checkout. Free worldwide shipping over $75.
            </p>
            <button
              type="button"
              className="w-full bg-gold text-ivory text-xs uppercase tracking-widest2 py-4 hover:bg-gold-soft transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
