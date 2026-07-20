import { useEffect } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeCart() }
    if (isOpen) {
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeCart])

  return (
    <>
      {/* Backdrop — pointer-events-none so page remains interactive */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/40 backdrop-blur-sm transition-opacity duration-500 ease-velmora ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-500 ease-velmora pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-velmora-stone/30 px-6 py-5">
            <h2 className="font-serif text-lg tracking-widest uppercase">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 transition-colors hover:text-velmora-gold"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag size={40} className="mb-4 text-velmora-stone" />
                <p className="font-serif text-lg tracking-wide text-velmora-warmgray">
                  Your cart is empty
                </p>
                <p className="mt-1 text-sm text-velmora-taupe">
                  Discover something beautiful
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 border border-velmora-ink px-8 py-3 text-xs uppercase tracking-widest text-velmora-ink transition-colors hover:bg-velmora-ink hover:text-white"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-sand flex items-center justify-center">
                      <span className="font-serif text-lg text-velmora-taupe">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-0.5">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm uppercase tracking-widest text-velmora-ink hover:text-velmora-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 text-xs capitalize text-velmora-warmgray">
                          {item.tone} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-stone/50">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity - 1)
                            }
                            className="px-2 py-1 transition-colors hover:bg-velmora-sand"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="min-w-[1.5rem] text-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity + 1)
                            }
                            className="px-2 py-1 transition-colors hover:bg-velmora-sand"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.cartId)}
                      className="self-start p-1 text-velmora-taupe transition-colors hover:text-velmora-ink"
                      aria-label="Remove item"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-stone/30 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velmora-warmgray">Subtotal</span>
                <span className="font-serif text-lg tracking-wide">
                  ${subtotal}
                </span>
              </div>
              <p className="mb-4 text-xs text-velmora-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-velmora-ink py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-charcoal">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full border border-velmora-ink py-3 text-xs uppercase tracking-widest text-velmora-ink transition-colors hover:bg-velmora-ink hover:text-white"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
