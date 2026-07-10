import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useCart } from "../../context/CartContext.jsx"
import { formatPrice, cn } from "../../lib/utils.js"
import { CloseIcon, MinusIcon, PlusIcon } from "../ui/Icons.jsx"

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    setQuantity,
    subtotal,
  } = useCart()
  const navigate = useNavigate()

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
      if (e.key === "Escape" && isOpen) closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  const goToCheckout = () => {
    closeCart()
    navigate("/cart")
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-espresso/55 backdrop-blur-[2px]"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory text-ink shadow-lift flex flex-col transition-transform duration-500 ease-velvet",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-hairline">
          <div>
            <p className="eyebrow">Your Bag</p>
            <h3 className="font-serif text-[24px] mt-1">
              {items.length === 0 ? "Empty for now" : `${items.length} ${items.length === 1 ? "piece" : "pieces"}`}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="text-ink/60 hover:text-ink transition-colors"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <div className="w-16 h-16 mb-6 border border-hairline rounded-full flex items-center justify-center text-champagne">
                <span className="font-serif text-[28px] italic">V</span>
              </div>
              <p className="font-serif text-[22px] text-ink">Your bag is empty</p>
              <p className="mt-2 text-[13px] text-muted max-w-[260px]">
                Begin with a pair of huggies — they sell out most Saturdays.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-8 btn-primary max-w-[260px]"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="px-6 py-2">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-5 border-b border-hairline last:border-b-0"
                >
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="block w-20 h-24 flex-shrink-0 overflow-hidden bg-ivory-soft"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-[10px]">{item.name}</p>
                        <p className="mt-1 text-[11px] text-muted capitalize">
                          {item.variant === "gold" ? "18K Gold Plated" : item.variant}
                        </p>
                      </div>
                      <p className="text-[14px] text-ink font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(item.id, item.variant, item.quantity - 1)}
                          className="h-8 w-8 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                        >
                          <MinusIcon className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-[12px] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(item.id, item.variant, item.quantity + 1)}
                          className="h-8 w-8 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                        >
                          <PlusIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[10px] tracking-eyebrow uppercase text-muted hover:text-ink transition-colors"
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

        {items.length > 0 && (
          <div className="border-t border-hairline p-6 bg-ivory-soft">
            <div className="flex items-center justify-between mb-4">
              <span className="eyebrow">Subtotal</span>
              <span className="text-[18px] font-medium text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-[12px] text-muted mb-5">
              Shipping & taxes calculated at checkout. Free worldwide shipping over $75.
            </p>
            <button
              type="button"
              onClick={goToCheckout}
              className="btn-primary"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full text-[10px] tracking-eyebrow uppercase text-muted hover:text-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
