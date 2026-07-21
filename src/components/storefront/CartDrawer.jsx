import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart()

  useEffect(() => {
    if (!isCartOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeCart, isCartOpen])

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <div
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velvet transition-transform duration-300 ease-velvet ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between border-b border-velmora-stone/15 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-velmora-stone">
              Your Cart
            </p>
            <h2 className="font-serif text-3xl">Selected Pieces</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-stone/20 p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="rounded-full bg-velmora-sand p-5 text-velmora-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-velmora-ink">Your cart is still empty</h3>
              <p className="text-sm leading-7 text-velmora-stone">
                Discover polished everyday pieces and gift-ready sets curated for quiet shine.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-velmora-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <div
                  key={item.itemKey}
                  className="rounded-[1.5rem] border border-velmora-stone/15 bg-white px-4 py-4 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl uppercase tracking-[0.18em] text-velmora-ink">
                        {item.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.22em] text-velmora-stone">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-velmora-ink">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.itemKey)}
                      className="text-xs uppercase tracking-[0.2em] text-velmora-stone transition hover:text-velmora-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-stone/20 px-2 py-1">
                      <button
                        type="button"
                        onClick={() =>
                          item.quantity === 1
                            ? removeItem(item.itemKey)
                            : updateQuantity(item.itemKey, item.quantity - 1)
                        }
                        className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-sand"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium text-velmora-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                        className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-sand"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-velmora-ink">
                      {formatPrice(item.quantity * item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <footer className="border-t border-velmora-stone/15 px-6 py-5">
              <div className="mb-5 flex items-center justify-between text-sm text-velmora-stone">
                <span>Subtotal</span>
                <span className="font-semibold text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="mb-3 w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink transition duration-300 ease-velvet hover:-translate-y-0.5"
              >
                Checkout Coming Soon
              </button>
              <p className="text-center text-xs uppercase tracking-[0.18em] text-velmora-stone">
                Secure checkout integration ready for your payment stack.
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
