import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import ProductImage, { PLACEHOLDER_SVG } from '@/components/ui/ProductImage'
import { useImageLoader } from '@/lib/useImageLoader'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useImageLoader([isOpen, items.length])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream flex flex-col transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-[0.14em] uppercase">
            Your Cart {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="hover:text-champagne transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} strokeWidth={1} className="text-line" />
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone max-w-xs">
              Discover pieces crafted to be treasured — your next favorite awaits.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 border border-ink text-ink text-[11px] tracking-[0.18em] uppercase px-7 py-3 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4">
                    <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                      <ProductImage
                        imgId={item.imgId}
                        query={`[${item.descId}] [${item.titleId}]`}
                        ratio="4x5"
                        width={160}
                        alt={item.name}
                        className="w-20 h-24 object-cover bg-sand"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-2">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-base uppercase tracking-[0.1em] text-ink hover:text-champagne transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-stone hover:text-ink transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="px-2 py-1.5 hover:bg-sand transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} strokeWidth={1.5} />
                          </button>
                          <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="px-2 py-1.5 hover:bg-sand transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-line px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.18em] uppercase text-stone">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full bg-champagne text-cream text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-champagne-deep transition-colors duration-300"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-[11px] tracking-[0.18em] uppercase text-stone hover:text-ink transition-colors"
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
