import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-ink/40 animate-overlay-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl animate-drawer-in flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Cart{" "}
            <span className="text-stone text-sm align-middle">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="text-stone mb-4" />
            <p className="font-serif text-xl text-ink mb-2">Your cart is empty</p>
            <p className="text-sm text-stone mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <Button as={Link} to="/shop" onClick={closeCart}>
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4">
                    <div className="w-20 h-24 shrink-0 bg-sand overflow-hidden">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[cart-${item.productId}-title] gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src={PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                      <span id={`cart-${item.productId}-title`} className="hidden">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-serif text-base text-ink leading-tight">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="text-stone hover:text-gold text-xs uppercase tracking-wide"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-stone mt-1 uppercase tracking-wide">
                        {item.tone}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-ink/15">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-sm text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <p className="text-sm text-ink font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/10 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-stone uppercase tracking-wide">Subtotal</span>
                <span className="text-ink font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-xs uppercase tracking-[0.18em] text-stone hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
