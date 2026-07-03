import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Lock, ArrowRight } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function CheckoutPage() {
  const { items, totals } = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  return (
    <main className="pt-24 md:pt-28">
      <header className="container-site pb-10 border-b border-line">
        <p className="eyebrow">Checkout</p>
        <h1
          id="checkout-title"
          className="display text-4xl md:text-5xl mt-3"
        >
          Almost yours
        </h1>
        <p className="mt-3 text-ink-secondary max-w-xl flex items-center gap-2">
          <Lock className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
          Secure checkout — your details are never stored.
        </p>
      </header>

      <div className="container-site py-12 md:py-16">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-ink-secondary">
              Your bag is empty. Add a piece to continue.
            </p>
            <Link to="/shop" className="btn-primary mt-6 inline-flex">
              Shop the Collection
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <form
              className="md:col-span-7 space-y-10"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Checkout"
            >
              <section>
                <h2 className="font-sans text-[12px] uppercase tracking-name font-medium mb-4">
                  Contact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input className="input-base" type="email" placeholder="Email" required />
                  <input className="input-base" type="tel" placeholder="Phone (optional)" />
                </div>
              </section>

              <section>
                <h2 className="font-sans text-[12px] uppercase tracking-name font-medium mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input className="input-base sm:col-span-2" placeholder="Full name" required />
                  <input className="input-base sm:col-span-2" placeholder="Address line 1" required />
                  <input className="input-base sm:col-span-2" placeholder="Address line 2 (optional)" />
                  <input className="input-base" placeholder="City" required />
                  <input className="input-base" placeholder="Postal code" required />
                  <input className="input-base" placeholder="Country" required />
                </div>
              </section>

              <section>
                <h2 className="font-sans text-[12px] uppercase tracking-name font-medium mb-4">
                  Payment
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  <input className="input-base" placeholder="Card number" />
                  <div className="grid grid-cols-2 gap-3">
                    <input className="input-base" placeholder="MM / YY" />
                    <input className="input-base" placeholder="CVC" />
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-ink-muted tracking-wider2">
                  This is a demo storefront — payment is not connected. Hook up
                  Stripe or your provider of choice here.
                </p>
              </section>

              <button type="submit" className="btn-primary w-full">
                Place Order — {formatPrice(totals.total)}
              </button>
            </form>

            <aside className="md:col-span-5 bg-surface border border-line p-6 md:p-8 md:sticky md:top-28 md:self-start">
              <h2 className="font-sans text-[12px] uppercase tracking-name font-medium text-ink-primary">
                Order Summary
              </h2>
              <ul className="mt-6 space-y-4 max-h-72 overflow-auto pr-2">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="text-ink-primary truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-ink-muted tracking-wider2">
                        {item.variant === "gold" ? "Gold" : "Silver"} · Qty {item.qty}
                      </p>
                    </div>
                    <span className="tabular-nums flex-shrink-0">
                      {formatPrice(item.lineTotal)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="hairline my-5" />
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between text-ink-secondary">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums">{formatPrice(totals.subtotal)}</dd>
                </div>
                <div className="flex justify-between text-ink-secondary">
                  <dt>Shipping</dt>
                  <dd className="tabular-nums">
                    {totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}
                  </dd>
                </div>
                <div className="flex justify-between text-ink-primary text-base pt-1 font-medium">
                  <dt>Total</dt>
                  <dd className="tabular-nums">{formatPrice(totals.total)}</dd>
                </div>
              </dl>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}
