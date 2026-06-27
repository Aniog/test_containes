import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { PLACEHOLDER, useStrkImages } from '@/lib/strk'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const listRef = useRef(null)
  useStrkImages(listRef, [items, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag className="w-10 h-10 text-stone" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-ink-soft">Discover pieces made to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] font-semibold border border-ink px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div ref={listRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={item.lineId} className="flex gap-4">
                  <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                    <img
                      src={PLACEHOLDER}
                      alt={item.imageAlt || item.name}
                      data-strk-img-id={item.imageId}
                      data-strk-img={item.name}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      className="w-20 h-20 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base leading-tight hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="text-stone hover:text-ink transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-xs text-ink-soft mt-0.5">{item.variant} tone</p>
                    )}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-ink-soft">Subtotal</span>
                <span className="font-medium tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">Shipping and taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full bg-gold text-cream py-4 text-[0.7rem] uppercase tracking-[0.2em] font-semibold hover:bg-gold-deep transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
