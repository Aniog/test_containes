import React from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, removeItem, setQuantity } = useCart()

  return (
    <>
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-50 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background text-foreground shadow-2xl transition-transform duration-500 ease-luxe",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl font-medium uppercase tracking-[0.2em]">
            Your Bag{" "}
            <span className="ml-1 text-sm text-muted-foreground">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-9 w-9 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-accent" strokeWidth={1} />
            <p className="font-serif text-2xl font-light">Your bag is empty</p>
            <p className="max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
              Discover demi-fine pieces crafted to be treasured every day.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-accent px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-colors duration-300 hover:bg-accent-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={`${item.productId}-${item.variant}`} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="block h-24 w-20 shrink-0 overflow-hidden bg-surface"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                          className="font-serif text-[15px] font-medium uppercase tracking-[0.12em] leading-snug hover:text-accent-deep"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.variant === "gold" ? "Gold Tone" : "Silver Tone"}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.product.name}`}
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQuantity(item.productId, item.variant, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQuantity(item.productId, item.variant, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-medium tracking-wide">
                        {formatPrice(item.lineTotal)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Complimentary worldwide shipping and 30-day returns on every order.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-accent py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground transition-colors duration-300 hover:bg-accent-deep"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
