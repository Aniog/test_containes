import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()
  const ref = useStrkImages([isOpen, items.length])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div>
            <h2 className="font-serif text-2xl text-ink">Your Cart</h2>
            <p className="text-xs text-stone mt-0.5">
              {count === 0 ? "Empty" : `${count} item${count > 1 ? "s" : ""}`}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-sand" strokeWidth={1} />
              <p className="font-serif text-xl text-ink">Your cart is empty</p>
              <p className="text-sm text-stone max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-2 inline-block text-[11px] uppercase tracking-[0.25em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      src={PLACEHOLDER}
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      className="w-20 h-20 object-cover bg-sand/40"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base text-ink uppercase tracking-[0.1em] leading-tight hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm text-ink whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <p className="text-xs text-stone mt-1">{item.variant}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-[0.2em] text-stone hover:text-gold transition-colors"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-ink text-cream py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold-deep transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.25em] text-ink border-b border-gold pb-1 hover:text-gold transition-colors mx-auto block w-fit"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
