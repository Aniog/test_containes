import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

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
          'fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-[2px] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand/60">
          <h2 className="font-serif text-xl text-ink tracking-wide">
            Your Bag <span className="text-taupe text-base">({items.length})</span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 text-ink hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-sand" strokeWidth={1} />
              <p className="font-serif text-xl text-ink">Your bag is empty</p>
              <p className="text-sm text-taupe max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={closeCart}
                className="mt-2 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand/40 border border-sand/60 overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={`pc-${item.id}-a`}
                      data-strk-img={`${item.name} gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base text-ink leading-tight hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-taupe hover:text-gold text-xs"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-xs text-taupe mt-0.5 uppercase tracking-[0.15em]">{item.variant}</p>
                    )}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand/70">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm text-ink font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand/60 px-6 py-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-[0.2em] text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-ivory py-4 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.2em] text-ink hover:text-gold transition-colors"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
