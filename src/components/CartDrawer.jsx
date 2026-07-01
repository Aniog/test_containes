import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/data'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-velmora-cream shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-border px-6 py-5">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-velmora-espresso" />
              <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-velmora-espresso">
                Your Cart ({count})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-velmora-taupe transition-colors hover:text-velmora-espresso"
              aria-label="Close cart"
            >
              <X size={20} className="pointer-events-none" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="mb-4 text-velmora-border" />
              <p className="font-serif text-xl text-velmora-espresso">Your cart is empty</p>
              <p className="mt-2 text-sm text-velmora-taupe">
                Discover something treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 border border-velmora-espresso px-8 py-3 text-xs font-semibold uppercase tracking-widest text-velmora-espresso transition-colors hover:bg-velmora-espresso hover:text-white"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.productId}-${item.variant}`} className="flex gap-4">
                      <div className="aspect-square w-20 bg-velmora-stone" />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <Link
                            to={`/products/${item.slug}`}
                            onClick={closeCart}
                            className="font-sans text-xs font-semibold uppercase tracking-widest-plus text-velmora-espresso hover:text-velmora-gold"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-xs capitalize text-velmora-taupe">
                            {item.variant}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-velmora-border">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.productId, item.variant, item.quantity - 1)
                              }
                              className="p-2 text-velmora-taupe hover:text-velmora-espresso"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} className="pointer-events-none" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.productId, item.variant, item.quantity + 1)
                              }
                              className="p-2 text-velmora-taupe hover:text-velmora-espresso"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} className="pointer-events-none" />
                            </button>
                          </div>
                          <span className="text-sm text-velmora-espresso">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="self-start text-velmora-taupe transition-colors hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} className="pointer-events-none" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-velmora-border px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-velmora-taupe">Subtotal</span>
                  <span className="font-sans text-base font-semibold text-velmora-espresso">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mb-5 text-xs text-velmora-taupe">
                  Shipping & taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-velmora-gold py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-dark"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
