import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { strkImgUrl } from '@/lib/strkImg'


export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-soft animate-slide-in-right"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
            Your Cart ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-stone/50" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-flex items-center justify-center bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-soft"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => {
                const nameId = `cart-${item.id}-name`
                const variantId = `cart-${item.id}-variant`
                return (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-ink/10 py-5"
                >
                  <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${variantId}] [${nameId}] gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={strkImgUrl(item.imgId)}
                      className="h-24 w-20 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3
                          id={nameId}
                          className="font-serif text-base uppercase tracking-widest2 text-ink"
                        >
                          {item.name}
                        </h3>
                        <p id={variantId} className="mt-0.5 text-xs text-stone">
                          {item.variant} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-stone transition-colors hover:text-gold"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:bg-ink hover:text-cream"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" strokeWidth={2} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:bg-ink hover:text-cream"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" strokeWidth={2} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest2 text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-4 w-full bg-gold py-4 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-soft"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-stone transition-colors hover:text-ink"
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
