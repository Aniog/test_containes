import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { formatPrice } from '@/data/products.js'
import { useCart } from './CartContext.jsx'
import LuxuryButton from './LuxuryButton.jsx'

export default function CartDrawer() {
  const { items, count, subtotal, isCartOpen, closeCart, updateQuantity, removeItem } = useCart()

  useEffect(() => {
    document.body.classList.toggle('drawer-open', isCartOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [isCartOpen])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        aria-label="Close cart overlay"
        className="absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm"
        onClick={closeCart}
        type="button"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md animate-drawer-in flex-col bg-velmora-cream text-velmora-ink shadow-soft sm:border-l sm:border-velmora-champagne/30">
        <div className="flex items-center justify-between border-b border-velmora-champagne/30 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-stone">Your cart</p>
            <h2 className="font-serif text-3xl font-semibold">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-champagne/40 p-2 text-velmora-ink transition-colors hover:bg-velmora-parchment"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-antique" />
              <h3 className="font-serif text-3xl font-semibold">Your cart is quiet.</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-velmora-stone">
                Discover golden everyday pieces made for gifting, layering, and keeping.
              </p>
              <LuxuryButton to="/shop" className="mt-6" onClick={closeCart}>
                Start Shopping
              </LuxuryButton>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="border-b border-velmora-champagne/25 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-product text-velmora-ink">
                        {item.product.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-luxury text-velmora-stone">
                        {item.variant} · {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs font-bold uppercase tracking-luxury text-velmora-antique hover:text-velmora-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-velmora-champagne/40 bg-velmora-cream text-velmora-ink">
                      <button
                        type="button"
                        className="p-2 hover:bg-velmora-parchment"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label={`Decrease ${item.product.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 px-3 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        className="p-2 hover:bg-velmora-parchment"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label={`Increase ${item.product.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-semibold text-velmora-ink">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-champagne/30 bg-velmora-parchment px-6 py-5 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between text-sm font-semibold uppercase tracking-luxury">
            <span>Subtotal · {count} item{count === 1 ? '' : 's'}</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <LuxuryButton type="button" className="w-full">
            Continue to Checkout
          </LuxuryButton>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-stone">
            Checkout is ready to connect when your final payment provider is selected.
          </p>
        </div>
      </aside>
    </div>
  )
}
