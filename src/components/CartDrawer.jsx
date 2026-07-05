import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } =
    useCart()
  const containerRef = useStrkImages([items, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-espresso-950/40 backdrop-blur-[2px] transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso-200 px-6 py-5">
          <h2 className="font-serif text-xl text-espresso-900">
            Your Cart{" "}
            <span className="font-sans text-xs uppercase tracking-widest text-espresso-400">
              ({count})
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso-600 transition-colors hover:text-espresso-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag size={32} className="text-espresso-300" />
              <p className="font-serif text-lg text-espresso-700">
                Your cart is empty
              </p>
              <p className="max-w-xs font-sans text-sm text-espresso-500">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 border border-espresso-800 px-6 py-2.5 text-xs uppercase tracking-widest text-espresso-800 transition-colors hover:bg-espresso-800 hover:text-cream"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-espresso-100">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="h-24 w-24 object-cover bg-espresso-50"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        id={item.titleId}
                        className="font-sans text-[11px] uppercase tracking-widest text-espresso-800"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-espresso-400 transition-colors hover:text-espresso-800"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <p className="mt-1 text-xs capitalize text-espresso-500">
                      {item.tone} tone
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-espresso-200">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.key, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-espresso-600 transition-colors hover:text-espresso-900"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-8 text-center font-sans text-xs text-espresso-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.key, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-espresso-600 transition-colors hover:text-espresso-900"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="font-serif text-base text-espresso-900">
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
          <div className="border-t border-espresso-200 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-widest text-espresso-600">
                Subtotal
              </span>
              <span className="font-serif text-xl text-espresso-900">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 font-sans text-[11px] text-espresso-400">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-espresso-900 py-3.5 text-xs uppercase tracking-widest text-cream transition-colors hover:bg-gold-600"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-2 text-[11px] uppercase tracking-widest text-espresso-500 transition-colors hover:text-espresso-800"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
