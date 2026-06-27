import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

function resolveImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return PLACEHOLDER
  const first = entry.results?.[0]
  return first?.url || PLACEHOLDER
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart()

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

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-velmora-cream shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-velmora-ink">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-velmora-stone transition-colors hover:text-velmora-ink"
          >
            <X size={22} />
          </button>
        </div>

        <div id="cart-drawer-content" className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-velmora-line" strokeWidth={1} />
              <p className="mt-5 font-serif text-xl text-velmora-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-velmora-stone">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 bg-velmora-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-velmora-gold-deep"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-velmora-line">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-velmora-sand"
                  >
                    <img
                      src={resolveImageUrl(line.imgId)}
                      alt={line.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3
                          id={`cart-${line.key}-name`}
                          className="font-sans text-[11px] uppercase tracking-[0.15em] text-velmora-ink"
                        >
                          {line.name}
                        </h3>
                        <p className="mt-1 text-xs text-velmora-stone">{line.tone}</p>
                      </div>
                      <p className="font-sans text-sm text-velmora-ink">
                        {formatPrice(line.price * line.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-velmora-line">
                        <button
                          type="button"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                          className="px-2 py-1.5 text-velmora-stone transition-colors hover:text-velmora-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-7 text-center text-xs text-velmora-ink">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                          className="px-2 py-1.5 text-velmora-stone transition-colors hover:text-velmora-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-[11px] uppercase tracking-[0.12em] text-velmora-stone underline-offset-4 transition-colors hover:text-velmora-ink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-line px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-velmora-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-velmora-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-velmora-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-5 w-full bg-velmora-gold py-4 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-velmora-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full py-3 text-[11px] uppercase tracking-[0.18em] text-velmora-stone transition-colors hover:text-velmora-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
