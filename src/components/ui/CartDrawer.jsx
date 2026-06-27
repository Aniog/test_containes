import { useCart } from "@/context/CartContext"
import { Button } from "./Button"
import { QuantitySelector } from "./QuantitySelector"
import { X, Gem } from "lucide-react"
import { getProductById } from "@/data/products"

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-ivory shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <h2 className="font-serif text-2xl tracking-wide text-charcoal">Your Bag</h2>
            <button
              type="button"
              onClick={closeCart}
              className="text-warm-gray transition-colors hover:text-charcoal"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <p className="font-serif text-xl text-charcoal">Your bag is empty</p>
              <p className="mt-2 text-sm text-warm-gray">
                Discover pieces crafted to be treasured.
              </p>
              <Button
                variant="primary"
                className="mt-8"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-warm-gray">
                  {count} {count === 1 ? "item" : "items"}
                </p>
                <ul className="space-y-6">
                  {items.map((item) => {
                    const product = getProductById(item.productId)
                    return (
                      <li key={item.id} className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-cream">
                          {product ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-cream">
                              <Gem className="h-6 w-6 text-border" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="font-serif text-sm uppercase tracking-wider text-charcoal">
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-xs text-warm-gray">
                              Tone: {item.tone}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <QuantitySelector
                              compact
                              value={item.quantity}
                              onChange={(qty) => updateQuantity(item.id, qty)}
                            />
                            <span className="font-sans text-sm font-medium text-charcoal">
                              ${item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="self-start text-warm-gray transition-colors hover:text-charcoal"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={16} />
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="border-t border-border bg-cream/50 px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-widest text-warm-gray">Subtotal</span>
                  <span className="font-serif text-xl text-charcoal">${subtotal}</span>
                </div>
                <p className="mb-5 text-xs text-warm-gray">
                  Shipping and taxes calculated at checkout.
                </p>
                <Button fullWidth variant="primary" size="lg">
                  Checkout
                </Button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-3 w-full py-2 text-center text-xs uppercase tracking-widest text-warm-gray underline-offset-4 hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
