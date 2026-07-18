import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Button from "@/components/ui/Button"

// Cart line imgIds come from runtime state (localStorage via useCart), so the
// build-time image inliner cannot statically resolve them. Resolve the URL
// directly from the strk-img config at render time instead.
function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return ""
  const results = entry.results
  if (!Array.isArray(results) || results.length === 0) return ""
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || ""
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, count } =
    useCart()
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [count, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-espresso">
            Your Cart ({count})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-espresso transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={32} className="text-stone" />
              <p className="mt-4 font-serif text-xl text-espresso">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm text-taupe">
                Discover pieces made to be treasured.
              </p>
              <Button
                as={Link}
                to="/shop"
                variant="solid"
                size="sm"
                className="mt-6"
                onClick={closeCart}
              >
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-espresso/10">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/products/${item.productId}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <div className="relative h-24 w-20 overflow-hidden bg-sand">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="200"
                        src={resolveImgUrl(item.imgId)}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3 className="font-sans text-[11px] uppercase tracking-[0.18em] text-espresso">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-taupe">{item.tone}</p>
                      </div>
                      <p className="font-serif text-base text-espresso">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-espresso/15">
                        <button
                          type="button"
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="px-2 py-1 text-espresso transition-colors hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-8 text-center text-xs text-espresso">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="px-2 py-1 text-espresso transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-[0.15em] text-taupe underline-offset-4 transition-colors hover:text-gold hover:underline"
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
          <div className="border-t border-espresso/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-2 text-xs text-taupe">
              Shipping & taxes calculated at checkout.
            </p>
            <Button variant="dark" size="md" className="mt-4 w-full">
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.2em] text-taupe transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
