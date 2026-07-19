import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import Button from "@/components/ui/Button"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const ref = useStrkImages([isOpen, items.length])

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
        className={cn(
          "fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl text-espresso">
            Your Cart{" "}
            <span className="text-sm text-stone">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso transition-colors hover:text-gold"
          >
            <X size={20} />
          </button>
        </div>

        <div ref={ref} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={32} className="text-hairline" />
              <p className="mt-4 font-serif text-xl text-espresso">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} className="mt-6">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-cream"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-espresso">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-stone">
                          {item.variant}
                        </p>
                      </div>
                      <p className="font-serif text-base text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1.5 text-espresso transition-colors hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-xs text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1.5 text-espresso transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-[11px] uppercase tracking-[0.14em] text-stone underline-offset-4 transition-colors hover:text-gold hover:underline"
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
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <Button className="mt-4 w-full">Checkout</Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.18em] text-stone transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
