import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, resolveImgUrl } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Cart{' '}
            <span className="text-sm text-stone">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="text-stone/50" />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3 text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold-soft"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 border-b border-hairline py-5 last:border-0"
              >
                <Link to={`/products/${item.slug}`} onClick={closeCart} className="shrink-0">
                  <img
                    src={resolveImgUrl(item.imgId)}
                    alt={item.alt}
                    className="h-24 w-20 object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-2">
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-widest2 text-ink hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs text-stone underline-offset-2 hover:text-gold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-stone">{item.tone}</p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-hairline">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        className="px-2.5 py-1.5 text-ink transition-colors hover:bg-cream"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} strokeWidth={1.5} />
                      </button>
                      <span className="min-w-8 text-center text-sm text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        className="px-2.5 py-1.5 text-ink transition-colors hover:bg-cream"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-sm text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest2 text-stone">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold-soft"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-xs uppercase tracking-widest2 text-ink underline-offset-4 hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
