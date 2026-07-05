import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { cn, formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen, closeCart])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-500 ease-elegant",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping bag"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
        onClick={closeCart}
      />
      {/* Panel */}
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-cream-elevated shadow-soft-lg flex flex-col",
          "transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-ink/8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4 text-ink" strokeWidth={1.5} />
            <h2 className="font-serif text-lg font-medium tracking-[0.2em] uppercase">
              Your Bag
            </h2>
            <span className="text-xs text-muted-light">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close bag"
            onClick={closeCart}
            className="p-1.5 text-ink hover:text-gold transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-8 py-20 text-center">
              <div className="w-16 h-16 rounded-full border border-ink/15 flex items-center justify-center mb-6">
                <ShoppingBag className="h-6 w-6 text-ink/60" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-ink mb-2">Your bag is empty</h3>
              <p className="text-sm text-muted-light mb-8 max-w-xs">
                Discover our bestsellers and add a little gold to your day.
              </p>
              <Link to="/shop" onClick={closeCart} className="btn-primary">
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-ink/8">
              {items.map((line) => (
                <li key={line.id} className="flex gap-4 px-6 py-5">
                  <div className="w-20 h-24 bg-ink flex-shrink-0 overflow-hidden">
                    {line.image && (
                      <img
                        src={line.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-3">
                      <div className="min-w-0">
                        <p className="product-name text-[11px] text-ink truncate">
                          {line.name}
                        </p>
                        <p className="text-[11px] text-muted-light mt-1 capitalize">
                          {line.tone}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-ink whitespace-nowrap">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-ink/15">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(line.id, line.quantity - 1)}
                          className="p-1.5 text-ink hover:text-gold transition-colors"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs font-medium text-ink">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          className="p-1.5 text-ink hover:text-gold transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        className="text-[11px] uppercase tracking-[0.2em] text-muted-light hover:text-ink transition-colors"
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

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="border-t border-ink/8 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.25em] text-muted-light">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-muted-light leading-relaxed">
              Shipping & taxes calculated at checkout. Free worldwide shipping on orders over $80.
            </p>
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => alert("Checkout flow coming soon — wire to your preferred provider.")}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="text-link w-full text-center block"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
