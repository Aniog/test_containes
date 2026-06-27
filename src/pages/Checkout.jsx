import * as React from "react";
import { Link } from "react-router-dom";
import {
  useCartState,
  useCartDispatch,
  useCartUi,
  formatPrice,
} from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const FREE_SHIPPING_THRESHOLD = 75;
const FLAT_SHIPPING = 8;

export default function Checkout() {
  const { items } = useCartState();
  const { subtotal } = useCartUi();
  const { clearCart } = useCartDispatch();
  const [submitted, setSubmitted] = React.useState(false);

  const onPlace = (e) => {
    e.preventDefault();
    // Simulated checkout — in a real app, this would integrate with a payment provider.
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
    }, 300);
  };

  if (submitted) {
    return (
      <main className="bg-ivory pt-24 md:pt-28 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
          Order placed
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink">
          Thank you.
        </h1>
        <p className="mt-4 text-sm md:text-base text-ink-muted max-w-md">
          Your order has been received. A confirmation has been sent to your
          email. We'll send tracking details as soon as your piece ships.
        </p>
        <div className="mt-10">
          <Link to="/">
            <Button variant="primary" size="md">Back to Home</Button>
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="bg-ivory pt-24 md:pt-28 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="mt-4 font-serif text-4xl text-ink">Your bag is empty.</h1>
        <Link to="/shop" className="mt-8">
          <Button variant="primary" size="md">Shop the Collection</Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-ivory pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h1 className="font-serif text-4xl md:text-5xl text-ink">Checkout</h1>
        <div className="mt-8 h-px bg-hairline" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <form onSubmit={onPlace} className="lg:col-span-7 space-y-10">
          <Section title="Contact">
            <Field label="Email" type="email" required defaultValue="" />
            <Field label="Phone" type="tel" defaultValue="" />
          </Section>
          <Section title="Shipping">
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" required />
              <Field label="Last name" required />
            </div>
            <Field label="Address" required />
            <Field label="Apartment, suite, etc. (optional)" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="City" required />
              <Field label="Postal code" required />
            </div>
            <Field label="Country" required defaultValue="United States" />
          </Section>
          <Section title="Payment">
            <p className="text-sm text-ink-muted">
              This is a demo storefront — no real payment will be processed.
            </p>
            <Field label="Card number" placeholder="4242 4242 4242 4242" required />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Expiration" placeholder="MM / YY" required />
              <Field label="CVC" placeholder="123" required />
            </div>
          </Section>
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Place Order · {formatPrice(subtotal)}
          </Button>
        </form>

        <aside className="lg:col-span-5">
          <div className="bg-cream p-6 md:p-8 border border-hairline lg:sticky lg:top-28">
            <h2 className="text-[11px] uppercase tracking-eyebrow font-medium text-ink">
              Order Summary
            </h2>
            <ul className="mt-5 space-y-4">
              {items.map((item) => (
                <li key={item.key} className="flex items-center gap-4">
                  <div className="w-14 h-16 bg-ivory overflow-hidden flex-shrink-0">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      data-strk-img-id={`checkout-${item.productId}`}
                      data-strk-img={item.image || `gold jewelry ${item.name}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif uppercase tracking-product text-sm text-ink truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-button text-ink-muted">
                      {item.variant ? `${item.variant} · ` : ""}Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-hairline space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-muted">Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Shipping</span>
                <span className="text-ink">{subtotal >= FREE_SHIPPING_THRESHOLD ? "Free" : formatPrice(FLAT_SHIPPING)}</span>
              </div>
              <div className="flex justify-between pt-4 mt-4 border-t border-hairline">
                <span className="text-xs uppercase tracking-button font-medium text-ink">Total</span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal + (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING))}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-[11px] uppercase tracking-eyebrow font-medium text-ink">
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="block text-xs text-ink-muted mb-1.5">{label}</span>
      <input
        {...props}
        className="w-full bg-transparent text-ink placeholder:text-ink-muted/60 h-12 px-3 border border-hairline focus:border-cocoa focus:outline-none transition-colors duration-300"
      />
    </label>
  );
}
