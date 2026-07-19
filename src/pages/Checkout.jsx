import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";

export default function Checkout() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <section className="pt-28 md:pt-32 pb-20">
        <div className="container-7xl text-center max-w-xl mx-auto">
          <p className="eyebrow text-muted">◆ Checkout</p>
          <h1 className="display-1 text-4xl md:text-5xl text-ink mt-3">
            Your bag is empty.
          </h1>
          <p className="text-sm text-muted mt-4">
            Add a piece to your bag, and we'll get you to checkout.
          </p>
          <Link to="/shop" className="btn-outline mt-8 inline-flex">
            Shop the Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-32 pb-20">
      <div className="container-7xl">
        <header className="mb-10">
          <p className="eyebrow text-muted">◆ Checkout</p>
          <h1 className="display-1 text-4xl md:text-5xl text-ink mt-3">
            Almost yours.
          </h1>
          <p className="text-sm text-muted mt-3">
            Checkout is a placeholder in this preview. The cart state and
            items below will be wired to a real checkout in the next step.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <form
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Email" name="email" type="email" full />
            <Field label="First name" name="first" />
            <Field label="Last name" name="last" />
            <Field label="Address" name="address1" full />
            <Field label="City" name="city" />
            <Field label="Postal code" name="zip" />
            <Field label="Country" name="country" />
            <Field label="Card number" name="card" full />
            <Field label="Expiry" name="exp" />
            <Field label="CVC" name="cvc" />
            <button type="submit" className="btn-primary sm:col-span-2 mt-2">
              Place order — {formatPrice(subtotal)}
            </button>
          </form>

          <aside className="lg:col-span-5 bg-paper border border-stone p-6 md:p-8 h-fit">
            <h2 className="eyebrow text-ink mb-5">Your order</h2>
            <ul className="divide-y divide-stone">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-4">
                  <div className="w-16 shrink-0">
                    <StrkImage
                      imgId={item.imgId}
                      query={`[checkout-item-name-${item.id}]`}
                      ratio="1x1"
                      width="160"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      id={`checkout-item-name-${item.id}`}
                      className="product-name text-ink"
                    >
                      {item.name}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {item.variant?.label} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm text-ink tabular-nums shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t border-stone pt-4 mt-2 space-y-2 text-sm">
              <Row label="Subtotal" value={formatPrice(subtotal)} />
              <Row label="Shipping" value="Free" />
              <Row label="Tax" value="Calculated next" />
              <div className="border-t border-stone pt-3 mt-3 flex items-center justify-between">
                <span className="uppercase tracking-eyebrow text-xs text-muted">
                  Total
                </span>
                <span className="font-serif text-2xl text-ink tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", full = false }) {
  return (
    <label
      className={`block ${full ? "sm:col-span-2" : ""}`}
    >
      <span className="block text-[10px] uppercase tracking-eyebrow text-muted mb-1.5">
        {label}
      </span>
      <input
        name={name}
        type={type}
        className="w-full bg-transparent border-b border-stone focus:border-ink focus:outline-none py-2.5 text-sm text-ink"
      />
    </label>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-ink-soft">
      <span className="uppercase tracking-eyebrow text-[10px] text-muted">
        {label}
      </span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}
