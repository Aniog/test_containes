import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart, useCartActions } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen } = useCart()
  const { toggleCart, removeItem, updateQuantity, clearCart } = useCartActions()
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
        onClick={() => toggleCart(false)}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-100">
          <h2 className="font-serif text-xl tracking-wider">
            CART ({totalQuantity})
          </h2>
          <button
            onClick={() => toggleCart(false)}
            className="p-2 text-velvet-500 hover:text-velvet-950 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velvet-400">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="font-sans text-sm tracking-wide">
              Your cart is empty
            </p>
            <button
              onClick={() => toggleCart(false)}
              className="btn-outline text-xs mt-2"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.variant}`}
                  className="flex gap-4 py-3 border-b border-velvet-100 last:border-0"
                >
                  <div
                    className="w-20 h-20 flex-shrink-0 bg-velvet-100 flex items-center justify-center"
                    style={{ backgroundColor: item.image }}
                  >
                    <ShoppingBag size={20} className="text-cream-50/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => toggleCart(false)}
                      className="font-serif text-sm tracking-wider uppercase hover:text-velvet-600 transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-velvet-500 mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm font-medium mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.variant,
                            item.quantity - 1
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border border-velvet-200 text-velvet-600 hover:border-velvet-950 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={1} />
                      </button>
                      <span className="text-sm font-sans tabular-nums w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.variant,
                            item.quantity + 1
                          )
                        }
                        className="w-7 h-7 flex items-center justify-center border border-velvet-200 text-velvet-600 hover:border-velvet-950 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={1} />
                      </button>
                      <button
                        onClick={() =>
                          removeItem(item.productId, item.variant)
                        }
                        className="ml-auto text-xs text-velvet-400 hover:text-velvet-900 underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velvet-100 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-sm tracking-wider">
                  SUBTOTAL
                </span>
                <span className="font-sans font-medium text-lg">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velvet-500 font-sans text-center">
                Free worldwide shipping · 30-day returns
              </p>
              <button className="btn-primary w-full text-sm tracking-widest">
                CHECKOUT
              </button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-velvet-400 hover:text-velvet-900 underline underline-offset-4 font-sans tracking-wide"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
