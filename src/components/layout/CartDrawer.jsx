import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveStrkImage } from "@/lib/utils"
import Button from "@/components/ui/Button"

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, setQuantity, subtotal, count } = useCart()

  // close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [closeCart])

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
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
            Your Cart {count > 0 && <span className="text-taupe">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
              <p className="mt-5 font-serif text-xl text-ink">Your cart is empty</p>
              <p className="mt-2 text-sm text-taupe">
                Discover pieces crafted to be treasured.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} className="mt-6">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-sand">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-sand/40"
                  >
                    <img
                      alt={item.name}
                      src={resolveStrkImage(item.imgId) || TRANSPARENT_PIXEL}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-base uppercase tracking-widest2 text-ink">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs capitalize text-taupe">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.lineId)}
                        aria-label={`Remove ${item.name}`}
                        className="text-taupe transition-colors hover:text-gold"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.lineId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.lineId, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-sm text-ink">
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
              <span className="text-[11px] uppercase tracking-widest2 text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-taupe">
              Shipping & taxes calculated at checkout.
            </p>
            <Button className="mt-4 w-full" size="lg">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest2 text-taupe transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
