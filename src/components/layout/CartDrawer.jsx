import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import strkImgConfig from "@/strk-img-config.json"

function resolveImgUrl(imgId) {
  const suffixes = ["-card", "-main", "-thumb-0"]
  for (const suffix of suffixes) {
    const entry = strkImgConfig[`${imgId}${suffix}`]
    if (entry?.picked && entry.results) {
      const picked = entry.results.find((r) => r.id === entry.picked)
      if (picked?.url) return picked.url
    }
  }
  return null
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()

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

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="cart-drawer"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-2xl text-ink">
            Your Bag{" "}
            <span className="font-sans text-sm text-stone">({count})</span>
          </h2>
          <button
            onClick={closeCart}
            className="text-ink transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 border border-ink px-8 py-3 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-sand">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-cream"
                    >
                      <img
                        alt={item.name}
                        src={
                          resolveImgUrl(item.imgId) ||
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        }
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            onClick={closeCart}
                            className="font-serif text-base uppercase tracking-wider text-ink hover:text-gold"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-0.5 text-xs text-stone">{item.variant}</p>
                        </div>
                        <p className="font-serif text-base text-ink">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-sand">
                          <button
                            onClick={() => setQuantity(item.key, item.quantity - 1)}
                            className="px-2 py-1 text-ink transition-colors hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm text-ink">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => setQuantity(item.key, item.quantity + 1)}
                            className="px-2 py-1 text-ink transition-colors hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-xs uppercase tracking-wider text-stone underline-offset-4 transition-colors hover:text-gold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-sand px-6 py-5">
              <div className="flex items-center justify-between pb-4">
                <span className="text-sm uppercase tracking-wider text-stone">Subtotal</span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="pb-4 text-xs text-stone">
                Shipping & taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button className="w-full bg-gold py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep hover:text-ivory">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full py-2 text-xs uppercase tracking-wider text-stone transition-colors hover:text-ink"
              >
                Continue Shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
