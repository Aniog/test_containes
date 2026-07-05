import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import QuantityStepper from "@/components/ui/QuantityStepper"
import StockImage from "@/components/ui/StockImage"
import { VARIANTS } from "@/data/products"

function EmptyState({ onClose }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
      <p className="eyebrow mb-3">Your bag is empty</p>
      <h3 className="font-serif text-3xl text-ink mb-2">A piece worth keeping</h3>
      <p className="text-sm text-muted mb-7 max-w-xs">
        Begin with our most-loved pieces, or browse the full collection.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn btn-primary px-8 h-11 text-[0.7rem]"
      >
        Shop the Collection
      </Link>
    </div>
  )
}

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, itemCount, setQuantity, removeLine } = useCart()
  const drawerRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Focus close button on open; ESC to close
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    const t = window.setTimeout(() => closeButtonRef.current?.focus(), 60)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.clearTimeout(t)
    }
  }, [isOpen, closeCart])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-bone shadow-drawer flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 sm:px-6 border-b border-line">
          <div>
            <p className="eyebrow">Your Bag</p>
            <p className="text-[11px] text-muted-2 mt-0.5 font-sans">
              {itemCount === 0 ? "Nothing here yet" : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink hover:text-ink-soft transition-colors"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
        </div>

        {lines.length === 0 ? (
          <EmptyState onClose={closeCart} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 divide-y divide-line">
              {lines.map((line) => {
                const product = line.product
                if (!product) return null
                const variantLabel = VARIANTS.find((v) => v.id === line.variant)?.label || line.variant
                return (
                  <div key={line.id} className="py-5 flex gap-4">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="block w-20 h-24 flex-shrink-0"
                    >
                      <StockImage
                        imgId={`${product.imgId}-cart`}
                        query={`[${product.descId}] [${product.nameId}]`}
                        ratio="3x4"
                        width={200}
                        alt={product.name}
                        className="w-full h-full"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <Link
                            to={`/product/${product.id}`}
                            onClick={closeCart}
                            className="block"
                          >
                            <p
                              id={`cart-${line.id}-name`}
                              className="product-name text-[0.78rem] leading-tight truncate"
                            >
                              {product.name}
                            </p>
                          </Link>
                          <p id={`cart-${line.id}-desc`} className="text-xs text-muted mt-1 font-sans">
                            {product.materialLabel}
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-muted-2 font-sans">
                            <span
                              className="h-2.5 w-2.5 rounded-full border border-ink/15"
                              style={{
                                background:
                                  VARIANTS.find((v) => v.id === line.variant)?.swatch || "#B08A52",
                              }}
                              aria-hidden="true"
                            />
                            {variantLabel}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeLine(line.id)}
                          aria-label={`Remove ${product.name}`}
                          className="text-muted-2 hover:text-ink transition-colors -mr-1 p-1"
                        >
                          <X size={14} strokeWidth={1.4} />
                        </button>
                      </div>
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <QuantityStepper
                          value={line.quantity}
                          onChange={(q) => setQuantity(line.id, q)}
                          size="sm"
                          className="h-9"
                        />
                        <span className="text-sm font-medium text-ink font-sans">
                          {formatPrice(line.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-line bg-bone-2/40 px-5 sm:px-6 py-5">
              <div className="flex items-baseline justify-between mb-1">
                <span className="eyebrow">Subtotal</span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[11px] text-muted-2 font-sans">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  closeCart()
                  window.alert("Checkout is not connected in this preview.")
                }}
                className="mt-4 w-full btn btn-primary h-12 text-[0.72rem]"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-[0.7rem] uppercase tracking-product text-muted hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
