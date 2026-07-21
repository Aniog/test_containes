import { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, removeItem, updateQuantity, subtotal, clearCart } = useCart()

  useEffect(() => {
    if (!isCartOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isCartOpen, setIsCartOpen])

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300',
          isCartOpen ? 'translate-x-0' : 'invisible translate-x-full'
        )}
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
        inert={!isCartOpen ? 'true' : undefined}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl font-medium text-charcoal">Your Cart</h2>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-warmgray transition-colors hover:text-charcoal"
            aria-label="Close cart"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-hairline" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-charcoal">Your cart is empty</p>
            <p className="mt-1 text-sm text-warmgray">Discover something beautiful.</p>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="mt-6 bg-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-taupe/30">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="product-name text-xs font-medium text-charcoal">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs capitalize text-warmgray">
                          Tone: {item.variant}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-warmgray hover:bg-taupe/50"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="min-w-[1.5rem] px-1 text-center text-xs font-medium text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-warmgray hover:bg-taupe/50"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1 text-warmgray transition-colors hover:text-accent"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wide text-warmgray">Subtotal</span>
                <span className="font-serif text-xl font-medium text-charcoal">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-5 text-xs text-warmgray">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-accent py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full py-2 text-xs uppercase tracking-wide text-warmgray underline-offset-4 hover:underline"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
