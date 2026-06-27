import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, subtotal, totalItems, removeItem, updateQuantity, closeDrawer } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeDrawer}
      />
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand/40 px-6 py-5">
          <h2 className="font-serif text-xl font-medium tracking-wide text-velmora-espresso">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeDrawer}
            className="flex h-9 w-9 items-center justify-center rounded-full text-velmora-warm-gray transition-colors hover:bg-velmora-cream hover:text-velmora-espresso"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag size={40} className="text-velmora-sand" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-taupe">Your cart is empty</p>
              <button
                onClick={closeDrawer}
                className="mt-2 rounded-full bg-velmora-espresso px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-velmora-charcoal"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-velmora-cream">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23D4C9B8' width='1' height='1'/%3E%3C/svg%3E`
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-0.5">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeDrawer}
                        className="font-serif text-sm font-medium uppercase tracking-wider text-velmora-espresso hover:text-velmora-gold"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-velmora-taupe">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-velmora-sand/60 px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="flex h-6 w-6 items-center justify-center text-velmora-warm-gray transition-colors hover:text-velmora-espresso"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-[1rem] text-center text-sm font-medium text-velmora-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="flex h-6 w-6 items-center justify-center text-velmora-warm-gray transition-colors hover:text-velmora-espresso"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-velmora-espresso">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-taupe transition-colors hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-sand/40 px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-velmora-warm-gray">Subtotal</span>
              <span className="font-serif text-lg font-medium text-velmora-espresso">
                ${subtotal}
              </span>
            </div>
            <p className="mb-5 text-xs text-velmora-taupe">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full rounded-full bg-velmora-espresso py-3.5 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-velmora-charcoal">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="mt-3 w-full text-center text-xs uppercase tracking-wider text-velmora-warm-gray transition-colors hover:text-velmora-espresso"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
