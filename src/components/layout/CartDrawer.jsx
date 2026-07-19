import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/context/CartContext"
import StrkImage from "@/components/ui/StrkImage"
import { getProductById } from "@/data/products"
import { cn, formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
    shipping,
    total,
  } = useCart()

  const closeRef = useRef(null)

  // Focus the close button when opening, restore focus on close
  useEffect(() => {
    if (isOpen) {
      const previouslyFocused = document.activeElement
      requestAnimationFrame(() => closeRef.current?.focus())
      return () => {
        if (previouslyFocused && typeof previouslyFocused.focus === "function") {
          previouslyFocused.focus()
        }
      }
    }
  }, [isOpen])

  // Escape to close
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
        "fixed inset-0 z-50 transition-opacity duration-300 ease-editorial",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[420px] bg-paper text-ink",
          "shadow-drawer flex flex-col",
          "transform transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="px-6 h-16 flex items-center justify-between border-b border-mist">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} />
            <h2 className="font-serif text-lg tracking-wide">Your Bag</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:text-gold-deep transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full border border-mist flex items-center justify-center mb-6">
              <ShoppingBag size={22} strokeWidth={1.25} className="text-taupe" />
            </div>
            <p className="font-serif text-2xl mb-2">Your bag is empty</p>
            <p className="text-sm text-taupe mb-8 max-w-[260px]">
              Begin your collection — demi-fine pieces, made to be worn every
              day.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 divide-y divide-mist">
              {items.map((item) => {
                const product = getProductById(item.id)
                if (!product) return null
                return (
                  <li
                    key={`${item.id}-${item.tone}`}
                    className="py-5 flex gap-4"
                  >
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="block w-20 flex-shrink-0"
                    >
                      <StrkImage
                        imgId={`cart-${product.id}-${item.tone}`}
                        query={`[${product.descId}] [${product.titleId}]`}
                        ratio="3x4"
                        width={300}
                        alt={product.name}
                        className="w-20"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="eyebrow mb-1">{item.eyebrow}</p>
                          <Link
                            to={`/product/${product.id}`}
                            onClick={closeCart}
                            className="product-name text-[13px] block truncate hover:text-gold-deep"
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-taupe mt-1 capitalize">
                            {item.tone}
                          </p>
                        </div>
                        <p className="font-serif text-sm whitespace-nowrap">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-mist">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.tone,
                                item.quantity - 1,
                              )
                            }
                            className="w-8 h-8 inline-flex items-center justify-center hover:text-gold-deep"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.tone,
                                item.quantity + 1,
                              )
                            }
                            className="w-8 h-8 inline-flex items-center justify-center hover:text-gold-deep"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-[11px] uppercase tracking-eyebrow text-taupe hover:text-ink transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="border-t border-mist px-6 py-5 bg-paper">
              <dl className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-taupe">Subtotal</dt>
                  <dd className="font-serif text-base">
                    {formatPrice(subtotal)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-taupe">Shipping</dt>
                  <dd className="font-serif text-base">
                    {shipping === 0 ? (
                      <span className="text-gold-deep text-xs uppercase tracking-eyebrow">
                        Complimentary
                      </span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </dd>
                </div>
                {shipping > 0 ? (
                  <p className="text-[11px] text-taupe pt-1">
                    Add {formatPrice(75 - subtotal)} more for free shipping.
                  </p>
                ) : null}
              </dl>
              <div className="my-5 hairline" />
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm text-ink">Total</span>
                <span className="font-serif text-xl">{formatPrice(total)}</span>
              </div>
              <button
                type="button"
                className="btn-primary w-full"
                onClick={() => {
                  closeCart()
                  window.alert(
                    "Checkout coming soon — this is a preview storefront.",
                  )
                }}
              >
                Checkout
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
              <p className="mt-4 text-center text-[11px] text-taupe uppercase tracking-eyebrow">
                Secure checkout · 30-day returns
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
