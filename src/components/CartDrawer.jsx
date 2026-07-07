import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      })
      return () => {
        document.body.style.overflow = ""
        cancelAnimationFrame(frameId)
      }
    }
    document.body.style.overflow = ""
  }, [isOpen, items.length])

  return (
    <>
      <button
        type="button"
        onClick={closeCart}
        className={`
          fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        aria-label="Close cart overlay"
      />

      <aside
        ref={drawerRef}
        className={`
          fixed right-0 top-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl
          transition-transform duration-500 ease-out-expo
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gold-muted px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-ink" />
              <h2 className="font-serif text-lg font-medium uppercase tracking-widest text-ink">
                Your Cart
              </h2>
              <span className="rounded-full bg-gold-muted px-2 py-0.5 text-xs font-sans text-ink">
                {count}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-ink transition-colors hover:text-gold-dark"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag size={40} className="mb-4 text-stone" />
                <p className="font-serif text-xl text-ink">Your cart is empty</p>
                <p className="mt-2 max-w-xs text-sm text-stone">
                  Discover pieces crafted to be treasured.
                </p>
                <Button asChild className="mt-6" onClick={closeCart}>
                  <Link to="/shop">Shop the Collection</Link>
                </Button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    <Link
                      to={`/products/${item.product.id}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-parchment"
                    >
                      <img
                        data-strk-img-id={`cart-thumb-${item.product.id}`}
                        data-strk-img={`[product-desc-${item.product.id}] [product-title-${item.product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          to={`/products/${item.product.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium uppercase tracking-widest text-ink hover:text-gold-dark"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-0.5 text-xs capitalize text-stone">
                          Tone: {item.variant}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gold-muted">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 text-ink hover:bg-parchment"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm font-sans text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 text-ink hover:bg-parchment"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-sans font-medium text-ink">
                            ${item.product.price * item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id, item.variant)}
                            className="text-stone hover:text-red-600"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gold-muted p-6">
              <div className="mb-4 flex items-center justify-between text-ink">
                <span className="font-sans text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl font-medium">${subtotal}</span>
              </div>
              <p className="mb-5 text-xs text-stone">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <Button
                variant="ghost"
                className="mt-2 w-full"
                onClick={closeCart}
                asChild
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
