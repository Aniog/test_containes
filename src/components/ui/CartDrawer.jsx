import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart, useUI } from "@/lib/cart-context.jsx"
import { findProductById } from "@/data/products.js"
import { formatPrice, cn } from "@/lib/utils.js"
import ProductImage from "@/components/product/ProductImage.jsx"

export default function CartDrawer() {
  const { cart, setQty, removeItem } = useCart()
  const { drawerOpen, setDrawerOpen } = useUI()

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [drawerOpen, setDrawerOpen])

  if (!drawerOpen) return null

  const lines = cart
    .map((line) => {
      const product = findProductById(line.id)
      return product ? { line, product } : null
    })
    .filter(Boolean)

  const subtotal = lines.reduce(
    (sum, { line, product }) => sum + product.price * line.qty,
    0
  )

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-espresso/50 transition-opacity"
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory shadow-drawer animate-slideInRight"
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-espresso" strokeWidth={1.5} />
            <h2 className="font-serif text-xl text-espresso">Your Bag</h2>
            <span className="font-sans text-xs text-taupe">
              ({lines.reduce((s, l) => s + l.line.qty, 0)})
            </span>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close bag"
            className="p-2 -mr-2 text-espresso"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
            <p className="mt-3 text-sm text-taupe">
              Pieces you love will wait for you here.
            </p>
            <Link
              to="/shop"
              onClick={() => setDrawerOpen(false)}
              className="btn-outline mt-8"
            >
              Browse the Shop
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {lines.map(({ line, product }) => (
                <li
                  key={line.key}
                  className="flex gap-4 border-b border-hairline py-5 last:border-b-0"
                >
                  <Link
                    to={`/shop/${product.id}`}
                    onClick={() => setDrawerOpen(false)}
                    className="block h-24 w-24 flex-shrink-0 overflow-hidden bg-sand"
                  >
                    <ProductImage
                      product={product}
                      ratio="1x1"
                      width={240}
                      className="h-full w-full object-cover"
                      priority="thumb"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/shop/${product.id}`}
                          onClick={() => setDrawerOpen(false)}
                          className="product-name block text-sm text-espresso"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1 text-xs text-taupe">
                          Tone: {line.tone}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-espresso">
                        {formatPrice(product.price * line.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          className="p-2 text-espresso hover:text-gold"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="min-w-8 text-center font-sans text-xs text-espresso">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="p-2 text-espresso hover:text-gold"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="font-sans text-[11px] uppercase tracking-[0.22em] text-taupe hover:text-espresso"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-hairline bg-sand/40 px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-taupe">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/checkout"
                onClick={() => setDrawerOpen(false)}
                className={cn("btn-primary mt-5 w-full")}
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="mt-3 w-full font-sans text-[11px] uppercase tracking-[0.22em] text-taupe hover:text-espresso"
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
