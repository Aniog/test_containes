import { Link } from "react-router-dom"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { useEffect, useRef } from "react"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"
import { findProductById } from "@/data/products"

function CartLine({ line, onQuantity, onRemove }) {
  const product = findProductById(line.productId)
  const imageQuery = product?.images?.[0]?.query || line.name

  return (
    <li className="flex gap-4 py-6 border-b border-hairline">
      <Link
        to={`/shop/${line.productId}`}
        className="block w-20 h-24 bg-ivory-soft overflow-hidden shrink-0"
      >
        <img
          data-strk-img-id={`cart-line-${line.key}`}
          data-strk-img={imageQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="200"
          alt={line.name}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="eyebrow">{line.eyebrow || product?.eyebrow}</span>
            <Link
              to={`/shop/${line.productId}`}
              className="product-name block mt-1 truncate hover:text-gold-deep"
            >
              {line.name}
            </Link>
            {line.variantLabel && (
              <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-muted">
                {line.variantLabel}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => onRemove(line.key)}
            className="text-muted hover:text-espresso transition-colors p-1"
            aria-label={`Remove ${line.name} from cart`}
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center border border-hairline">
            <button
              type="button"
              onClick={() => onQuantity(line.key, line.quantity - 1)}
              className="h-8 w-8 inline-flex items-center justify-center text-espresso-soft hover:bg-ivory-soft transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-xs text-espresso">{line.quantity}</span>
            <button
              type="button"
              onClick={() => onQuantity(line.key, line.quantity + 1)}
              className="h-8 w-8 inline-flex items-center justify-center text-espresso-soft hover:bg-ivory-soft transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="text-sm text-espresso">{formatPrice(line.price * line.quantity)}</span>
        </div>
      </div>
    </li>
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

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
        "fixed inset-0 z-[80] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="absolute inset-0 bg-espresso-deep/55 backdrop-blur-[1px]"
        onClick={closeCart}
        aria-label="Close cart"
      />

      <aside
        ref={containerRef}
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:w-[420px] bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-serif text-lg text-espresso">Your Bag</span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-muted">
              {items.length} {items.length === 1 ? "piece" : "pieces"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-1.5 text-espresso hover:text-gold-deep transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-20">
              <span className="eyebrow">Your bag is empty</span>
              <p className="mt-3 font-serif text-2xl text-espresso max-w-[260px] leading-snug">
                Begin a quiet collection.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-primary mt-8"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul>
              {items.map((line) => (
                <CartLine
                  key={line.key}
                  line={line}
                  onQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 bg-ivory">
            <div className="flex items-center justify-between mb-1">
              <span className="eyebrow">Subtotal</span>
              <span className="font-serif text-xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[11px] tracking-[0.12em] uppercase text-muted mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button type="button" className="btn btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-[11px] uppercase tracking-[0.22em] text-muted hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}