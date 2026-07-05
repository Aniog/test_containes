import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice } from "@/lib/utils"
import Button from "@/components/ui/Button"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const ref = useStrkImages([items, isOpen])

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
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide">
            Your Cart {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <ShoppingBag className="w-10 h-10 text-line mb-4" />
              <p className="font-serif text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-stone mb-6">
                Discover pieces crafted to be treasured.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} variant="primary" size="sm">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((line) => (
                <li key={line.id} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand overflow-hidden"
                  >
                    <img
                      alt={line.name}
                      data-strk-img-id={`${line.imgId}-cart`}
                      data-strk-img={`[${line.descId}] [${line.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${line.productId}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-[0.15em] leading-tight hover:text-gold transition-colors"
                    >
                      {line.name}
                    </Link>
                    <p className="text-xs text-stone mt-1">{line.variant} tone</p>
                    <p className="text-sm mt-2">{formatPrice(line.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.id, line.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{line.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        className="text-xs text-stone hover:text-ink underline underline-offset-2 transition-colors"
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
          <div className="border-t border-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <Button variant="gold" size="lg" className="w-full">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-center text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
