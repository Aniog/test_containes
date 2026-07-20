import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice, resolveStrkImgUrl } from '@/lib/utils'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/40 overlay-in"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream text-ink slide-in flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:opacity-60 transition-opacity">
            <X width={22} height={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag width={40} height={40} strokeWidth={1} className="text-line" />
            <p className="font-serif text-2xl">Your bag is empty</p>
            <p className="text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <button
              onClick={closeCart}
              className="mt-2 bg-champagne text-cream text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-champagne-deep transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-line">
                {items.map((item) => (
                  <li key={item.key} className="py-5 flex gap-4">
                    <Link to={`/product/${item.slug}`} onClick={closeCart} className="shrink-0">
                      <img
                        src={resolveStrkImgUrl(strkImgConfig, item.imgId)}
                        alt={item.name}
                        className="w-20 h-20 object-cover bg-sand"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                          className="font-serif text-base uppercase tracking-[0.1em] leading-tight hover:text-champagne transition-colors"
                        >
                          {item.name}
                        </Link>
                        <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                      <p className="text-xs text-stone mt-1 capitalize">{item.tone} tone</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-line">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center hover:bg-sand transition-colors"
                          >
                            <Minus width={13} height={13} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center hover:bg-sand transition-colors"
                          >
                            <Plus width={13} height={13} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-xs text-stone hover:text-ink underline underline-offset-4 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-stone">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-champagne text-cream text-xs tracking-[0.2em] uppercase py-4 hover:bg-champagne-deep transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs tracking-[0.2em] uppercase py-3 border border-ink hover:bg-ink hover:text-cream transition-colors"
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
