import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Lock, Check } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Checkout — Velmora Fine Jewelry"
    return () => {
      document.title = "Velmora Fine Jewelry"
    }
  }, [])

  const shipping = 0
  const total = subtotal + shipping

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-page px-6 md:px-12 py-12 md:py-20">
        <div className="text-center mb-12">
          <p className="kicker">Secure checkout</p>
          <h1 className="mt-3 headline-lg text-espresso">Almost yours</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-serif text-[20px] text-mink">
              Your bag is empty.
            </p>
            <Link to="/shop" className="mt-6 inline-flex underline-link">
              Browse the collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <form
              className="md:col-span-7 space-y-8"
              onSubmit={(e) => {
                e.preventDefault()
                clearCart()
                alert("This is a demo — no real order was placed.")
              }}
            >
              <fieldset>
                <legend className="kicker mb-4">Contact</legend>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-taupe bg-cream px-4 py-3 font-serif text-[16px] focus:border-espresso focus:outline-none"
                />
              </fieldset>

              <fieldset>
                <legend className="kicker mb-4">Shipping</legend>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    className="border border-taupe bg-cream px-4 py-3 font-serif text-[16px] focus:border-espresso focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="border border-taupe bg-cream px-4 py-3 font-serif text-[16px] focus:border-espresso focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="mt-3 w-full border border-taupe bg-cream px-4 py-3 font-serif text-[16px] focus:border-espresso focus:outline-none"
                />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="border border-taupe bg-cream px-4 py-3 font-serif text-[16px] focus:border-espresso focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    required
                    className="border border-taupe bg-cream px-4 py-3 font-serif text-[16px] focus:border-espresso focus:outline-none"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="kicker mb-4">Payment</legend>
                <div className="border border-taupe bg-cream p-6 text-center">
                  <Lock
                    className="h-4 w-4 mx-auto text-mink"
                    strokeWidth={1.5}
                  />
                  <p className="mt-3 font-serif text-[16px] text-mink">
                    Payment will connect to Stripe, Shopify, or your
                    provider of choice.
                  </p>
                  <p className="mt-2 font-sans text-[11px] tracking-[0.18em] uppercase text-mink">
                    Demo only — no card information collected
                  </p>
                </div>
              </fieldset>

              <button type="submit" className="w-full btn-primary">
                <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                Place order — {formatPrice(total)}
              </button>
            </form>

            <aside className="md:col-span-5">
              <div className="bg-cream-deep p-6 md:p-8 border border-taupe md:sticky md:top-28">
                <p className="kicker mb-4">Your bag</p>
                <ul className="space-y-4 mb-6">
                  {items.map((item) => (
                    <li
                      key={item.lineId}
                      className="flex items-start gap-4"
                    >
                      <div className="h-16 w-16 bg-cream overflow-hidden flex-shrink-0">
                        <img
                          alt={item.name}
                          data-strk-img-id={`checkout-${item.slug}-${item.tone}-img`}
                          data-strk-img={`[${item.name}]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-espresso truncate">
                          {item.name}
                        </p>
                        <p className="mt-1 font-sans text-[11px] tracking-[0.18em] uppercase text-mink">
                          {item.tone === "gold" ? "18K Gold" : "Silver"} · Qty {item.quantity}
                        </p>
                      </div>
                      <p className="font-serif text-[15px] text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-taupe pt-4 space-y-2 font-serif text-[15px]">
                  <div className="flex justify-between">
                    <span className="text-mink">Subtotal</span>
                    <span className="text-espresso">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mink">Shipping</span>
                    <span className="text-espresso">Free</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-tauze mt-3">
                    <span className="font-sans text-[12px] tracking-[0.24em] uppercase text-espresso">
                      Total
                    </span>
                    <span className="font-serif text-[20px] text-espresso">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
