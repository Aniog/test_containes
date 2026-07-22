import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Checkout() {
  const { items, totals } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-cream min-h-screen pt-32 pb-20">
        <div className="container-shell text-center max-w-xl mx-auto">
          <h1 className="font-display text-5xl text-ink">Your cart is empty</h1>
          <p className="mt-4 text-ink-soft">
            Begin with one of our hand-finished pieces.
          </p>
          <Link to="/shop" className="btn-primary mt-10 inline-flex">
            Shop the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream pt-24 md:pt-28 min-h-screen">
      <div className="container-shell py-12 md:py-20">
        <h1 className="font-display text-5xl md:text-6xl text-ink text-center">
          Checkout
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Form area (stub) */}
          <div className="md:col-span-7">
            <div className="space-y-10">
              <section>
                <h2 className="text-[11px] tracking-wider-3 uppercase font-medium text-ink">
                  Contact
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="First name" placeholder="Amelia" />
                  <Field label="Last name" placeholder="Reyes" />
                  <Field
                    label="Email"
                    placeholder="amelia@example.com"
                    type="email"
                    full
                  />
                </div>
              </section>

              <section>
                <h2 className="text-[11px] tracking-wider-3 uppercase font-medium text-ink">
                  Shipping Address
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Address" placeholder="123 Main St" full />
                  <Field label="City" placeholder="Lisbon" />
                  <Field label="Postal code" placeholder="1100-001" />
                  <Field label="Country" placeholder="Portugal" />
                </div>
              </section>

              <section>
                <h2 className="text-[11px] tracking-wider-3 uppercase font-medium text-ink">
                  Payment
                </h2>
                <p className="mt-4 text-sm text-ink-soft">
                  Payment integration coming soon. This is a frontend preview.
                </p>
              </section>

              <button className="btn-accent w-full">
                Place Order · {formatPrice(totals.total)}
              </button>
            </div>
          </div>

          {/* Summary */}
          <aside className="md:col-span-5">
            <div className="bg-ivory p-7 md:p-8">
              <h2 className="text-[11px] tracking-wider-3 uppercase font-medium text-ink">
                Summary
              </h2>
              <ul className="mt-6 divide-y divide-ink/10">
                {items.map((i) => (
                  <li key={i.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="product-name truncate">{i.name}</p>
                      <p className="mt-1 text-[10px] tracking-wider-3 uppercase text-mute">
                        Qty {i.qty}
                      </p>
                    </div>
                    <span className="text-sm tabular-nums">
                      {formatPrice(i.price * i.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-ink/10 space-y-2 text-sm">
                <div className="flex justify-between text-ink-soft">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatPrice(totals.subtotal)}</span>
                </div>
                <div className="flex justify-between text-ink-soft">
                  <span>Shipping</span>
                  <span>
                    {totals.shipping === 0
                      ? "Complimentary"
                      : formatPrice(totals.shipping)}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-ink/10 text-ink">
                  <span className="text-[11px] tracking-wider-3 uppercase">Total</span>
                  <span className="font-medium tabular-nums">
                    {formatPrice(totals.total)}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text", full = false }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[10px] tracking-wider-3 uppercase text-mute">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 block w-full bg-transparent border-b border-ink/20 py-2.5 text-sm text-ink placeholder:text-mute/60 outline-none focus:border-ink transition-colors duration-300"
      />
    </label>
  );
}
