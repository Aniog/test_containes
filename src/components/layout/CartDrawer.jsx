import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { STRK_PLACEHOLDER, resolveStrkImageUrl } from '@/lib/useStrkImages'
import { products } from '@/data/products'
import { formatPrice, cn } from '@/lib/utils'

const productBySlug = products.reduce((acc, p) => {
  acc[p.slug] = p
  return acc
}, {})

function cartItemImageUrl(item) {
  if (item.imgId) return resolveStrkImageUrl(item.imgId)
  const product = productBySlug[item.slug]
  if (product?.imgId) return resolveStrkImageUrl(product.imgId)
  return null
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Cart{' '}
            <span className="text-sm text-taupe">({count})</span>
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={32} className="text-sand" />
              <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-taupe">Discover pieces crafted to be treasured.</p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 border border-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link to={`/products/${item.slug}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      src={cartItemImageUrl(item) || STRK_PLACEHOLDER}
                      className="h-24 w-20 bg-cream object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/products/${item.slug}`}
                        onClick={closeCart}
                        className="font-sans text-[11px] uppercase tracking-widest3 text-ink hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[10px] uppercase tracking-widest2 text-taupe hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-taupe">{item.tone}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-8 text-center text-xs text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="font-serif text-base text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest2 text-taupe">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold-deep"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-taupe hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
