import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    }
  }, [isOpen, items])

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

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-espresso-bg/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[80] flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-espresso">
            Your Cart {count > 0 && <span className="text-taupe text-base">({count})</span>}
          </h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X className="w-5 h-5 text-espresso hover:text-gold transition-colors" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="font-serif text-xl text-espresso mb-2">Your cart is empty</p>
              <p className="text-sm text-taupe mb-6">Discover pieces made to be treasured.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gold text-cream px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold-deep transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5 py-2">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Image */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="w-20 h-24 bg-sand shrink-0 overflow-hidden"
                  >
                    <img
                      src={PLACEHOLDER}
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      id={item.titleId}
                      className="font-serif text-sm uppercase tracking-[0.1em] text-espresso hover:text-gold transition-colors block leading-tight"
                    >
                      {item.name}
                    </Link>
                    <p id={item.descId} className="sr-only">{item.shortDesc}</p>
                    <p className="text-xs text-taupe mt-1">{item.tone}</p>
                    <p className="text-sm text-espresso mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-espresso hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs text-espresso min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-espresso hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-taupe hover:text-espresso transition-colors underline underline-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] uppercase text-cocoa">Subtotal</span>
              <span className="font-serif text-xl text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-cream py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold-deep transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-xs tracking-[0.2em] uppercase text-cocoa hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
