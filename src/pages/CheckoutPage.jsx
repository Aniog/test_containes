import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import StrkImage from "@/components/ui/StrkImage";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, setQty, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <section className="bg-sand-50">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-950">Your bag is quiet.</h1>
          <p className="mt-3 text-textmute">Add a piece to begin checkout.</p>
          <Button variant="primary" size="lg" as={Link} to="/shop" className="mt-8">
            Shop the Collection
          </Button>
        </div>
      </section>
    );
  }

  const shipping = subtotal >= 80 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-950">Checkout</h1>
        <p className="mt-2 text-sm text-textmute">
          This is a demo store. No payment is processed.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a demo — checkout is not connected.");
            }}
            className="lg:col-span-7 space-y-10"
          >
            <fieldset>
              <legend className="label-cap text-ink-950 mb-4">Contact</legend>
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent border-b border-sand-300 py-3 text-sm focus:border-ink-950 outline-none"
              />
            </fieldset>

            <fieldset>
              <legend className="label-cap text-ink-950 mb-4">Shipping Address</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First name" required />
                <Input placeholder="Last name" required />
                <Input placeholder="Address" required className="sm:col-span-2" />
                <Input placeholder="City" required />
                <Input placeholder="Postal code" required />
                <Input placeholder="Country" required />
              </div>
            </fieldset>

            <fieldset>
              <legend className="label-cap text-ink-950 mb-4">Payment</legend>
              <div className="grid grid-cols-1 gap-4">
                <Input placeholder="Card number" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM / YY" required />
                  <Input placeholder="CVC" required />
                </div>
              </div>
            </fieldset>

            <Button type="submit" variant="primary" size="full">
              Place Order · {formatPrice(total)}
            </Button>
          </form>

          <aside className="lg:col-span-5">
            <div className="bg-sand-100 p-6 md:p-8 sticky top-28">
              <h2 className="label-cap text-ink-950">Your Order</h2>
              <ul className="mt-5 divide-y divide-sand-200">
                {items.map((it) => (
                  <li key={it.id} className="py-4 flex gap-3">
                    <div className="w-14 h-14 bg-sand-50 overflow-hidden flex-shrink-0">
                      <StrkImage
                        imgId={`co-${it.id}-mini`}
                        query={`${it.name} ${it.material} demi-fine gold jewelry product editorial warm`}
                        ratio="1x1"
                        width={120}
                        alt={it.name}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ink-950 truncate">{it.name}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setQty(it.id, it.qty - 1)}
                          className="text-xs text-textmute hover:text-ink-950"
                        >
                          −
                        </button>
                        <span className="text-xs">{it.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="text-xs text-textmute hover:text-ink-950"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(it.id)}
                          className="text-xs text-textmute hover:text-ink-950 ml-auto"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="text-sm text-ink-950 whitespace-nowrap">
                      {formatPrice(it.price * it.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-sand-200 pt-5 space-y-2 text-sm">
                <Row label="Subtotal" value={formatPrice(subtotal)} />
                <Row
                  label="Shipping"
                  value={shipping === 0 ? "Free" : formatPrice(shipping)}
                />
                <Row label="Total" value={formatPrice(total)} bold />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={`w-full bg-transparent border-b border-sand-300 py-3 text-sm focus:border-ink-950 outline-none ${props.className || ""}`}
    />
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex justify-between">
      <span className={bold ? "text-ink-950 font-medium" : "text-textmute"}>{label}</span>
      <span className={bold ? "text-ink-950 font-medium" : "text-ink-950"}>{value}</span>
    </div>
  );
}
