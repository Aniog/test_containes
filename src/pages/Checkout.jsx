import React from "react";
import { Link } from "react-router-dom";
import { Lock, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function Checkout() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-cream min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <ShoppingBag size={28} strokeWidth={1.4} className="text-gold-400 mb-5" />
        <h1 className="font-serif text-3xl mb-3">Nothing to check out yet</h1>
        <p className="text-sand-600 max-w-md mb-6">
          Add a piece to your cart and we'll meet you back here.
        </p>
        <Link to="/shop" className="btn-primary">Shop the collection</Link>
      </div>
    );
  }

  const shipping = subtotal >= 75 ? 0 : 6.5;
  const total = subtotal + shipping;

  return (
    <div className="bg-cream-50 min-h-screen pt-24 md:pt-28 pb-24">
      <div className="max-w-editorial mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-sand-600 font-sans mb-6">
          <Lock size={12} strokeWidth={1.5} /> Secure checkout
        </div>
        <h1 className="font-serif text-3xl md:text-4xl mb-10">Almost yours.</h1>

        <div className="grid md:grid-cols-[1fr_360px] gap-10 md:gap-16">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a demo storefront — connect a real checkout to continue.");
            }}
            className="space-y-10"
          >
            <Section title="Contact">
              <Field label="Email address" type="email" required placeholder="you@example.com" />
            </Section>

            <Section title="Shipping address">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First name" required />
                <Field label="Last name" required />
              </div>
              <Field label="Address" required placeholder="Street and apartment" />
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="City" required />
                <Field label="Postal code" required />
                <Field label="Country" required defaultValue="United States" />
              </div>
            </Section>

            <Section title="Payment">
              <Field label="Card number" required placeholder="1234 1234 1234 1234" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Expiration" required placeholder="MM / YY" />
                <Field label="CVC" required placeholder="CVC" />
              </div>
              <p className="text-[11px] text-sand-600 mt-2 font-sans">
                This is a demo. Don't enter real card details.
              </p>
            </Section>

            <button type="submit" className="btn-primary w-full">
              Place order · {formatPrice(total)}
            </button>
          </form>

          <aside className="md:sticky md:top-28 self-start bg-cream p-6 md:p-8">
            <h2 className="font-serif text-xl mb-5">Order summary</h2>
            <div className="space-y-5 mb-6">
              {items.map((it) => (
                <div key={it.lineId} className="flex gap-3 text-sm font-sans">
                  <div className="w-14 h-16 bg-cream-200 flex-shrink-0 overflow-hidden">
                    <img src={it.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name !text-[12px] !tracking-widest2 !normal-case text-ink line-clamp-1">
                      {it.name}
                    </p>
                    <p className="text-[10.5px] text-sand-600 tracking-wide">{it.tone} · Qty {it.qty}</p>
                  </div>
                  <p className="text-ink">{formatPrice(it.price * it.qty)}</p>
                </div>
              ))}
            </div>

            <hr className="hairline" />
            <Line label="Subtotal" value={formatPrice(subtotal)} />
            <Line
              label="Shipping"
              value={shipping === 0 ? "Free" : formatPrice(shipping)}
              highlight={shipping === 0}
            />
            <hr className="hairline mt-4" />
            <div className="flex items-baseline justify-between mt-4">
              <span className="font-sans text-[0.7rem] tracking-widest2 uppercase text-ink font-medium">
                Total
              </span>
              <span className="font-serif text-2xl text-ink">{formatPrice(total)}</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <fieldset>
      <legend className="font-serif text-xl mb-4">{title}</legend>
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
}

function Field({ label, type = "text", required, ...rest }) {
  return (
    <label className="block">
      <span className="block text-[10.5px] tracking-widest2 uppercase text-ink font-sans font-medium mb-1.5">
        {label}{required && <span className="text-gold-500"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        {...rest}
        className="field"
      />
    </label>
  );
}

function Line({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between text-sm font-sans py-1.5">
      <span className="text-sand-600">{label}</span>
      <span className={highlight ? "text-gold-500 font-medium" : "text-ink"}>{value}</span>
    </div>
  );
}
