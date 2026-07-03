import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, count } = useCart()

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
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream text-ink shadow-2xl flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <h2 className="text-[11px] uppercase tracking-[0.25em]">
              Your Cart {count > 0 && `(${count})`}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-stone/50" />
              <p className="font-serif text-xl">Your cart is empty</p>
              <p className="text-sm text-stone max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((line) => (
                <li
                  key={`${line.id}-${line.variant || 'default'}`}
                  className="flex gap-4"
                >
                  <Link
                    to={`/product/${line.id}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <div className="w-20 h-24 bg-sand overflow-hidden">
                      <img
                        data-strk-img-id={line.imgId}
                        data-strk-img={`[${line.titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={line.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${line.id}`}
                      onClick={closeCart}
                      className="block font-serif uppercase tracking-[0.15em] text-sm hover:text-gold transition-colors"
                    >
                      {line.name}
                    </Link>
                    {line.variant && (
                      <p className="text-xs text-stone mt-1">{line.variant}</p>
                    )}
                    <p className="text-sm mt-2">{formatPrice(line.price)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQty(line.id, line.variant, line.qty - 1)}
                          className="px-2 py-1 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(line.id, line.variant, line.qty + 1)}
                          className="px-2 py-1 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id, line.variant)}
                        className="text-[10px] uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors"
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
          <div className="border-t border-sand px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.25em] text-stone">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping and taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold text-ink text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-gold-soft transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.25em] text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
