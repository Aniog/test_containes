import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function CartDrawer() {
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

  useEffect(() => {
    if (!isOpen) return
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.getElementById("cart-drawer"))
    })
    return () => window.cancelAnimationFrame(frame)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        id="cart-drawer"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-canvas shadow-card transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-ink" />
            <h2 className="font-serif text-xl text-ink">
              Your Cart{" "}
              <span className="text-base text-stone">({count})</span>
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-stone transition-colors hover:text-ink"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-line" />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Button as={Link} to="/shop" onClick={closeCart} className="mt-2">
              Shop the Collection
            </Button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 border-b border-line py-5"
              >
                <Link
                  to={`/product/${item.slug}`}
                  onClick={closeCart}
                  className="shrink-0"
                >
                  <img
                    alt={item.name}
                    data-strk-img-id={`cart-${item.key}`}
                    data-strk-img={`[cart-name-${item.key}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-24 w-20 bg-cream object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-2">
                    <h3
                      id={`cart-name-${item.key}`}
                      className="font-serif text-base uppercase tracking-[0.12em] text-ink"
                    >
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-stone transition-colors hover:text-gold"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-stone">
                    {item.variant}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-line">
                      <button
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:bg-cream"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm text-ink">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:bg-cream"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="font-serif text-base text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="pb-4 text-xs text-stone">
              Shipping & taxes calculated at checkout. Free worldwide shipping.
            </p>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <button
              onClick={closeCart}
              className="mt-3 w-full text-center text-xs uppercase tracking-[0.18em] text-stone transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
