import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { strkImgUrl } from "@/lib/strk-images"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const containerRef = useStrkImages([isOpen, items.length])

  const shippingThreshold = 75
  const remaining = Math.max(0, shippingThreshold - subtotal)
  const progress = Math.min(100, (subtotal / shippingThreshold) * 100)

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-soft transition-transform duration-500 ease-luxury ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest2 text-charcoal">
            Your Cart ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-charcoal transition-colors hover:text-gold"
          >
            <X width={20} height={20} />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="border-b border-sand px-6 py-4">
            <p className="text-xs text-stone">
              {remaining > 0 ? (
                <>
                  You're <span className="font-medium text-charcoal">{formatPrice(remaining)}</span> away from free shipping
                </>
              ) : (
                <span className="font-medium text-gold-deep">You've unlocked free shipping</span>
              )}
            </p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-sand">
              <div
                className="h-full bg-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag width={40} height={40} className="text-sand" />
              <p className="mt-4 font-serif text-xl text-charcoal">Your cart is empty</p>
              <p className="mt-2 text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 border border-charcoal px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5 py-2">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="h-24 w-20 flex-shrink-0 overflow-hidden bg-cream-deep"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={strkImgUrl(item.imgId)}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-wider text-charcoal"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-stone transition-colors hover:text-gold-deep"
                      >
                        <Trash2 width={16} height={16} />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-stone">Tone: {item.tone}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-charcoal transition-colors hover:text-gold"
                        >
                          <Minus width={13} height={13} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-charcoal transition-colors hover:text-gold"
                        >
                          <Plus width={13} height={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest2 text-stone">Subtotal</span>
              <span className="font-serif text-2xl text-charcoal">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
