import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { Lock } from "lucide-react"

const Checkout = () => {
  const { items, subtotal, shipping, total, clear } = useCart()
  return (
    <main className="bg-ivory">
      <section className="container-wrap pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Checkout</span>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-ink">
              Almost there.
            </h1>
            <p className="mt-3 text-muted text-[15px] max-w-md leading-relaxed">
              This is a demo store — checkout isn't connected. Take a look around
              the collection, or get in touch about a piece you'd like.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { k: "Email", v: "you@example.com", placeholder: true },
                { k: "Shipping address", v: "Where shall we send it?", placeholder: true },
                { k: "Payment", v: "Card, Shop Pay, or Apple Pay", placeholder: true },
              ].map((f) => (
                <div key={f.k} className="border-b border-hairline pb-4">
                  <p className="eyebrow">{f.k}</p>
                  <p className="mt-2 font-sans text-[15px] text-ink/80">{f.v}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                clear()
                alert("Demo only — your bag is cleared.")
              }}
              className="btn-primary mt-10"
            >
              <Lock size={13} strokeWidth={1.5} className="mr-2" />
              Place order · demo
            </button>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-ivory-warm border border-hairline p-7 lg:p-9 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl text-ink">Your bag</h2>
              {items.length === 0 ? (
                <p className="mt-3 text-muted text-[14px]">Your bag is empty.</p>
              ) : (
                <>
                  <ul className="mt-6 divide-y divide-hairline">
                    {items.map((it) => (
                      <li key={`${it.id}-${it.variant}`} className="py-3 flex justify-between gap-4 text-[14px]">
                        <span className="text-ink/80">
                          {it.product.name} <span className="text-muted">× {it.qty}</span>
                        </span>
                        <span className="text-ink">{formatPrice(it.lineTotal)}</span>
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-6 space-y-2 text-[14px] font-sans">
                    <div className="flex justify-between">
                      <dt className="text-muted">Subtotal</dt>
                      <dd className="text-ink">{formatPrice(subtotal)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted">Shipping</dt>
                      <dd className="text-ink">
                        {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                      </dd>
                    </div>
                    <div className="hairline mt-3" />
                    <div className="flex justify-between pt-3 text-[15px]">
                      <dt className="text-ink">Total</dt>
                      <dd className="text-ink font-medium">{formatPrice(total)}</dd>
                    </div>
                  </dl>
                </>
              )}
              <Link to="/shop" className="link-arrow mt-8 inline-flex">
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Checkout
