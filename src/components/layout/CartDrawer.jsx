import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, resolveStrkImgUrl, cn } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream-50 shadow-soft transition-transform duration-500 ease-elegant",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">
            Your Bag ({count})
          </p>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink/70 hover:text-ink">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-ink/30" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="font-sans text-sm text-ink-muted">
              Discover pieces made to be treasured.
            </p>
            <button onClick={closeCart} className="btn-accent mt-2">
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 shrink-0 overflow-hidden bg-cream-200"
                    >
                      <img
                        src={resolveStrkImgUrl(`${item.imgId}-card`)}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="product-name text-sm">{item.name}</p>
                          <p className="mt-0.5 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                            {item.variant}
                          </p>
                        </div>
                        <p className="font-sans text-sm text-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-ink/15">
                          <button
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="px-2 py-1.5 text-ink/70 hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center font-sans text-xs text-ink">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="px-2 py-1.5 text-ink/70 hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.lineId)}
                          className="font-sans text-[11px] uppercase tracking-widest text-ink-muted underline-offset-4 hover:text-ink hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <p className="font-sans text-[11px] uppercase tracking-ultra text-ink-muted">
                  Subtotal
                </p>
                <p className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</p>
              </div>
              <p className="mt-1 font-sans text-xs text-ink-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="btn-accent mt-4 w-full">Checkout</button>
              <button
                onClick={closeCart}
                className="mt-3 w-full font-sans text-[11px] uppercase tracking-ultra text-ink-muted hover:text-ink"
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
