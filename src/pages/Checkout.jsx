import React from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function Checkout() {
  const { lines, subtotal } = useCart();
  const shipping = subtotal > 0 && subtotal < 80 ? 8 : 0;
  const total = subtotal + shipping;

  return (
    <main className="bg-ivory pt-24 sm:pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="eyebrow mb-3">Checkout</p>
          <h1 className="font-serif text-3xl sm:text-4xl text-espresso">
            Almost yours
          </h1>
        </div>

        {lines.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-serif text-2xl mb-3">Your bag is empty.</p>
            <Link to="/shop" className="btn btn-primary mt-2">
              Begin Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <form
              className="lg:col-span-7 space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                // Connect your real checkout provider here.
                alert("Checkout is not connected in this preview. Thank you!");
              }}
            >
              <section>
                <h2 className="product-title text-sm mb-4">Contact</h2>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                />
              </section>
              <section>
                <h2 className="product-title text-sm mb-4">Shipping</h2>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="First name"
                    className="col-span-1 h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                  />
                  <input
                    required
                    placeholder="Last name"
                    className="col-span-1 h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                  />
                  <input
                    required
                    placeholder="Address"
                    className="col-span-2 h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                  />
                  <input
                    required
                    placeholder="City"
                    className="col-span-1 h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                  />
                  <input
                    required
                    placeholder="Postal code"
                    className="col-span-1 h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                  />
                  <input
                    required
                    placeholder="Country"
                    className="col-span-2 h-12 px-4 border border-espresso/15 focus:border-espresso focus:outline-none bg-transparent"
                  />
                </div>
              </section>
              <button type="submit" className="btn btn-primary w-full">
                <Lock className="h-3.5 w-3.5" strokeWidth={1.5} /> Place order — {formatPrice(total)}
              </button>
            </form>

            <aside className="lg:col-span-5 bg-sand-100 p-6 sm:p-8 h-fit lg:sticky lg:top-28" style={{ backgroundColor: "#F2EBE0" }}>
              <h2 className="product-title text-sm mb-5">Order Summary</h2>
              <ul className="space-y-4 mb-6">
                {lines.map((l) => (
                  <li
                    key={`${l.id}-${l.variant}`}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="h-14 w-12 flex-shrink-0 bg-espresso" />
                    <div className="flex-1 min-w-0">
                      <p className="product-title text-[11px] truncate">
                        {l.product.name}
                      </p>
                      <p className="text-xs text-mocha">
                        {l.variant} · Qty {l.qty}
                      </p>
                    </div>
                    <p className="text-sm tabular-nums">
                      {formatPrice(l.lineTotal)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 text-sm border-t border-espresso/15 pt-4">
                <div className="flex justify-between">
                  <span className="text-mocha">Subtotal</span>
                  <span className="tabular-nums">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mocha">Shipping</span>
                  <span className="tabular-nums">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-espresso/15 mt-3 font-medium">
                  <span>Total</span>
                  <span className="tabular-nums">{formatPrice(total)}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
