import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart()
  const containerRef = useImageLoader([items])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-velmora-espresso/40"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-hairline">
          <h2 className="font-serif text-2xl tracking-widest">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
            <p className="font-serif text-xl mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-taupe mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="px-8 py-3 bg-velmora-espresso text-velmora-cream text-xs uppercase tracking-widest font-medium hover:bg-velmora-taupe transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div
              ref={containerRef}
              className="flex-1 overflow-y-auto px-6 py-6 space-y-8"
            >
              {items.map((item) => {
                const variant = item.product.variants.find(
                  (v) => v.id === item.variantId
                )
                const titleId = `cart-title-${item.product.id}`
                return (
                  <div key={`${item.product.id}-${item.variantId}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-stone-200 shrink-0 overflow-hidden">
                      <div
                        data-strk-bg-id={`cart-thumb-${item.product.id}-${item.variantId}`}
                        data-strk-bg={`[${titleId}]`}
                        data-strk-bg-ratio="3x4"
                        data-strk-bg-width="200"
                        role="img"
                        aria-label={item.product.name}
                        className="w-full h-full bg-cover bg-center"
                      />
                      <span id={titleId} className="sr-only">
                        {item.product.name}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-base tracking-wide truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-velmora-taupe mt-0.5 capitalize">
                        {variant?.label} tone
                      </p>
                      <p className="text-sm font-medium mt-1">
                        {formatPrice(item.product.price)}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variantId,
                              item.quantity - 1
                            )
                          }
                          className="p-1 border border-velmora-hairline hover:border-velmora-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variantId,
                              item.quantity + 1
                            )
                          }
                          className="p-1 border border-velmora-hairline hover:border-velmora-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item.product.id, item.variantId)
                          }
                          className="ml-auto text-xs text-velmora-taupe underline hover:text-velmora-espresso transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-velmora-hairline px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-taupe">Subtotal</span>
                <span className="font-serif text-xl">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-velmora-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full py-3.5 bg-velmora-gold text-velmora-espresso text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold-hover transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full py-3 border border-velmora-espresso text-velmora-espresso text-xs uppercase tracking-widest font-medium hover:bg-velmora-espresso hover:text-velmora-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
