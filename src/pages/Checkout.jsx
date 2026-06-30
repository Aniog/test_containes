import React from "react";
import { Link } from "react-router-dom";
import { Lock, ShoppingBag } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function Checkout() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-editorial pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag className="w-10 h-10 text-mute mb-4" strokeWidth={1.2} />
        <h1 className="font-display text-4xl">Your cart is empty</h1>
        <p className="mt-3 text-mute">Add a piece to your cart to continue.</p>
        <Link to="/shop" className="mt-8 btn-primary">
          Shop the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container-editorial pt-28 md:pt-32 pb-20 min-h-[80vh]">
      <div className="max-w-2xl mb-10">
        <div className="label-eyebrow text-mute mb-3">Checkout</div>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
          Almost <em className="italic">there</em>.
        </h1>
        <p className="mt-3 text-mute text-sm">
          This is a demo checkout — connect your provider here to take it live.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
        <form
          className="md:col-span-7 space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <Section title="Contact">
            <Input label="Email" type="email" placeholder="you@example.com" />
          </Section>
          <Section title="Shipping address">
            <div className="grid grid-cols-2 gap-4">
              <Input label="First name" />
              <Input label="Last name" />
            </div>
            <div className="mt-4">
              <Input label="Address" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Input label="City" />
              <Input label="Postal code" />
            </div>
            <div className="mt-4">
              <Input label="Country" />
            </div>
          </Section>
          <Section title="Payment">
            <div className="border border-line p-4 bg-bone text-sm text-mute flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              Payment fields will be handled by your provider (Stripe, Shopify, etc.)
            </div>
          </Section>
          <button type="submit" className="w-full btn-primary">
            Place Order · {formatPrice(subtotal)}
          </button>
        </form>

        <aside className="md:col-span-5">
          <div className="md:sticky md:top-28 bg-bone p-6 md:p-8 border border-line">
            <div className="label-eyebrow text-ink mb-5">Order summary</div>
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.lineId} className="flex gap-3">
                  <div className="w-14 h-16 bg-ivory flex-shrink-0 overflow-hidden">
                    <Artwork variant={it.art} tone="deep" className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0 text-sm">
                    <div className="product-name text-ink">{it.name}</div>
                    <div className="text-xs text-mute mt-0.5">
                      {it.tone} · Qty {it.quantity}
                    </div>
                  </div>
                  <div className="text-sm tabular-nums">
                    {formatPrice(it.price * it.quantity)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="hairline my-5" />
            <div className="space-y-2 text-sm">
              <Row label="Subtotal" value={formatPrice(subtotal)} />
              <Row label="Shipping" value="Free" />
              <Row label="Estimated tax" value="—" />
            </div>
            <div className="hairline my-5" />
            <Row
              label="Total"
              value={formatPrice(subtotal)}
              bold
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <div className="label-eyebrow text-ink mb-4">{title}</div>
      {children}
    </div>
  );
}

function Input({ label, ...rest }) {
  return (
    <label className="block">
      <span className="block text-xs text-mute mb-1.5">{label}</span>
      <input
        {...rest}
        className="w-full border border-line bg-ivory px-4 py-3 text-sm focus:border-ink focus:outline-none"
      />
    </label>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "text-base font-medium" : "text-charcoal"}`}>
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}
