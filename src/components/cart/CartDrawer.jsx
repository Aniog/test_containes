import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <h2 className="font-serif text-2xl">Your Cart ({itemCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 text-taupe hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-stone mb-4" strokeWidth={1} />
            <p className="font-serif text-xl mb-2">Your cart is empty</p>
            <p className="text-taupe text-sm mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <Button onClick={closeCart}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-base leading-tight">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-taupe-light hover:text-espresso transition-colors ml-2"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-taupe mt-1">
                      {item.tone} tone
                    </p>
                    <p className="text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="inline-flex items-center border border-stone mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.tone, item.quantity - 1)
                        }
                        className="px-2 py-1 hover:bg-cream transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.tone, item.quantity + 1)
                        }
                        className="px-2 py-1 hover:bg-cream transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone px-6 py-6 space-y-4 bg-cream/30">
              <div className="flex justify-between text-sm">
                <span className="text-taupe">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe-light">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs uppercase tracking-widest text-taupe hover:text-espresso transition-colors"
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
