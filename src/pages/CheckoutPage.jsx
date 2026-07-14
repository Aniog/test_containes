import { Link } from "react-router-dom"
import { useCart } from "@/lib/cart-context.jsx"
import { findProductById } from "@/data/products.js"
import { formatPrice } from "@/lib/utils.js"
import { ChevronLeft } from "lucide-react"

export default function CheckoutPage() {
  const { cart } = useCart()
  const lines = cart
    .map((line) => {
      const product = findProductById(line.id)
      return product ? { line, product } : null
    })
    .filter(Boolean)
  const subtotal = lines.reduce(
    (s, { line, product }) => s + product.price * line.qty,
    0
  )
  const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 8
  const total = subtotal + shipping

  return (
    <div className="page-fade bg-ivory pt-28 md:pt-32">
      <div className="container-x pb-24">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.22em] text-taupe hover:text-espresso"
        >
          <ChevronLeft className="h-3 w-3" strokeWidth={1.5} />
          Continue Shopping
        </Link>

        <h1
          id="checkout-title"
          className="h-section mt-6 text-5xl text-espresso md:text-6xl"
        >
          Checkout
        </h1>

        {lines.length === 0 ? (
          <div className="mt-12 max-w-md">
            <p className="text-base text-taupe">
              Your bag is empty. Find a piece to bring home.
            </p>
            <Link to="/shop" className="btn-primary mt-6">
              Browse the Shop
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1fr_360px]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert("This is a demo — connect a real checkout later.")
              }}
              className="space-y-10"
            >
              <fieldset>
                <legend className="mb-5 font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
                  Contact
                </legend>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="input-premium"
                />
              </fieldset>
              <fieldset>
                <legend className="mb-5 font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
                  Shipping Address
                </legend>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input required placeholder="First name" className="input-premium" />
                  <input required placeholder="Last name" className="input-premium" />
                  <input required placeholder="Address" className="input-premium md:col-span-2" />
                  <input required placeholder="City" className="input-premium" />
                  <input required placeholder="Postal code" className="input-premium" />
                  <input required placeholder="Country" className="input-premium md:col-span-2" />
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-5 font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
                  Payment
                </legend>
                <input
                  required
                  placeholder="Card number"
                  className="input-premium"
                />
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <input required placeholder="MM / YY" className="input-premium" />
                  <input required placeholder="CVC" className="input-premium" />
                </div>
              </fieldset>
              <button type="submit" className="btn-primary w-full">
                Place Order — {formatPrice(total)}
              </button>
            </form>

            <aside className="border border-hairline bg-card p-6 md:sticky md:top-28 md:self-start">
              <h2 className="font-serif text-xl text-espresso">Order Summary</h2>
              <ul className="mt-5 space-y-4">
                {lines.map(({ line, product }) => (
                  <li key={line.key} className="flex items-start gap-3 text-sm">
                    <div className="flex-1">
                      <p className="product-name text-xs text-espresso">
                        {product.name}
                      </p>
                      <p className="text-xs text-taupe">× {line.qty} · {line.tone}</p>
                    </div>
                    <p className="text-espresso">
                      {formatPrice(product.price * line.qty)}
                    </p>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-2 border-t border-hairline pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-taupe">Subtotal</dt>
                  <dd className="text-espresso">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-taupe">Shipping</dt>
                  <dd className="text-espresso">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-hairline pt-3 font-serif text-lg">
                  <dt className="text-espresso">Total</dt>
                  <dd className="text-espresso">{formatPrice(total)}</dd>
                </div>
              </dl>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
