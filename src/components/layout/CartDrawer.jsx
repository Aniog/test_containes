import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, shipping, total, itemCount } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
      />
      <div
        ref={drawerRef}
        className={cn(
          'fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-300 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-mist px-6 py-4">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-1 text-taupe transition-colors hover:text-espresso"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-mist" strokeWidth={1} />
            <p className="font-serif text-xl text-espresso">Your cart is empty</p>
            <p className="mt-2 text-sm text-taupe">Discover something beautiful to treasure.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 inline-block border-b border-espresso pb-1 text-sm uppercase tracking-widest text-espresso"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <p className="mb-4 text-xs uppercase tracking-widest text-taupe">
                {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
              </p>
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-parchment"
                    >
                      <img
                        src={item.imageUrl || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-base uppercase tracking-widest text-espresso hover:text-gold"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 text-xs capitalize text-taupe">
                          Tone: {item.tone}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-mist">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="p-1.5 text-taupe hover:text-espresso"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-sm text-espresso">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="p-1.5 text-taupe hover:text-espresso"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-espresso">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.tone)}
                            className="text-taupe hover:text-red-600"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-mist bg-parchment/50 px-6 py-5">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-taupe">
                  <span>Subtotal</span>
                  <span className="text-espresso">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-taupe">
                  <span>Shipping</span>
                  <span className="text-espresso">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between pt-2 font-medium text-espresso">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-5 w-full bg-gold py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-2 text-center text-xs uppercase tracking-widest text-taupe hover:text-espresso"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
