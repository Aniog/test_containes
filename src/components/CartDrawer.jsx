import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, setQuantity, subtotal, count } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [items.length, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl uppercase tracking-[0.18em] text-espresso">
            Your Cart ({count})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-espresso hover:text-gold">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe" />
              <p className="font-serif text-xl text-espresso">Your cart is empty</p>
              <p className="text-sm text-taupe max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={closeCart}
                className="mt-2 bg-espresso text-ivory text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <Link to={`/product/${line.id}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={line.name}
                      data-strk-img-id={line.imgId}
                      data-strk-img={`${line.name} ${line.tone} tone gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="w-20 h-24 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${line.id}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-[0.12em] text-espresso hover:text-gold"
                    >
                      {line.name}
                    </Link>
                    <p className="text-xs text-taupe mt-0.5">{line.tone} tone</p>
                    <p className="text-sm text-cocoa mt-1">{formatPrice(line.price)}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => setQuantity(line.key, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-espresso hover:bg-sand"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-sm text-espresso min-w-[2ch] text-center">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(line.key, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-espresso hover:bg-sand"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(line.key)}
                        aria-label="Remove item"
                        className="text-taupe hover:text-gold"
                      >
                        <Trash2 size={16} />
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
          <div className="border-t border-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-ivory text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-deep transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.2em] text-cocoa hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
