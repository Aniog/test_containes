import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"
import { lookupProductImageUrl } from "@/lib/strkLookup"

function CartItem({ item }) {
  const { setQuantity, removeItem } = useCart()
  const { product, quantity, variant, lineTotal } = item
  const fallbackSrc = lookupProductImageUrl(product, 0)

  return (
    <li className="flex gap-4 py-6 border-b border-line">
      <Link
        to={`/product/${product.id}`}
        className="relative w-20 h-24 sm:w-24 sm:h-28 bg-ivory-200 overflow-hidden flex-shrink-0"
      >
        <img
          alt={product.images[0].alt}
          data-strk-img={product.images[0].query}
          data-strk-img-ratio={product.images[0].ratio}
          data-strk-img-width="240"
          data-strk-img-id={`cart-${product.id}`}
          src={
            fallbackSrc ||
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          }
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              to={`/product/${product.id}`}
              className="product-name text-[0.7rem] leading-snug hover:text-gold-500 transition-colors block"
            >
              {product.name}
            </Link>
            <p className="text-[11px] tracking-[0.18em] uppercase text-taupe-500 mt-1">
              {variant === "gold" ? "18K Gold" : "Sterling Silver"}
            </p>
          </div>
          <button
            type="button"
            aria-label={`Remove ${product.name}`}
            onClick={() => removeItem(product.id, variant)}
            className="p-1 -m-1 text-taupe-400 hover:text-espresso-800 transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border border-line">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity(product.id, variant, quantity - 1)}
              className="w-8 h-8 grid place-items-center text-espresso-800 hover:bg-ivory-200 transition-colors"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-sm tabular-nums">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity(product.id, variant, quantity + 1)}
              className="w-8 h-8 grid place-items-center text-espresso-800 hover:bg-ivory-200 transition-colors"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>
          <span className="text-sm font-medium tabular-nums text-espresso-800">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>
    </li>
  )
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, summary, hydrated } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-900/45"
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Panel */}
      <aside
        className={cn(
          "absolute top-0 right-0 bottom-0 w-full sm:w-[440px] bg-ivory-100 shadow-drawer flex flex-col transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 h-16 border-b border-line flex-shrink-0">
          <h2 className="font-serif text-xl text-espresso-800">Your Bag</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 text-espresso-800 hover:text-gold-500 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        {hydrated && items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-14 h-14 rounded-full border border-line grid place-items-center text-taupe-400 mb-6">
              <ShoppingBag className="w-6 h-6" strokeWidth={1.2} />
            </div>
            <p className="font-serif text-2xl text-espresso-800 mb-2">Your bag is empty</p>
            <p className="text-sm text-taupe-500 mb-8 max-w-xs">
              Discover demi-fine pieces, crafted to be treasured.
            </p>
            <Link to="/shop" onClick={closeCart} className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 sm:px-8">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.variant}`}
                  item={item}
                />
              ))}
            </ul>
            <div className="border-t border-line px-6 sm:px-8 py-6 space-y-4 flex-shrink-0 bg-ivory-50">
              <div className="flex items-center justify-between text-sm text-espresso-800">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-taupe-500">
                <span>Shipping</span>
                <span className="tabular-nums">
                  {summary.shipping === 0 ? "Complimentary" : formatPrice(summary.shipping)}
                </span>
              </div>
              <hr className="hairline-soft" />
              <div className="flex items-center justify-between text-base text-espresso-800 font-medium">
                <span>Total</span>
                <span className="tabular-nums">{formatPrice(summary.total)}</span>
              </div>
              <p className="text-[11px] tracking-[0.15em] uppercase text-taupe-500 text-center pt-1">
                Free shipping on orders over $75
              </p>
              <button type="button" className="btn-primary w-full">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-link mx-auto block"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
