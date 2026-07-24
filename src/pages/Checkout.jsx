import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowRight, Check } from "lucide-react";
import Container from "@/components/common/Container";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "United States",
  });

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => clearCart(), 100);
  };

  if (orderPlaced) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full border border-gold flex items-center justify-center text-gold">
              <Check size={24} strokeWidth={1.4} />
            </div>
            <h1
              className="font-serif text-4xl sm:text-5xl text-ink mt-8 leading-tight"
              style={{ fontWeight: 400 }}
            >
              Thank you, {values.firstName || "friend"}.
            </h1>
            <p className="text-muted mt-4">
              Your order has been received. We've sent a confirmation to{" "}
              <span className="text-ink">{values.email || "your inbox"}</span>.
              Your heirloom is on its way.
            </p>
            <Link to="/shop" className="btn btn-primary mt-10">
              Continue Shopping
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-serif text-4xl text-ink">Your cart is quiet</h1>
            <p className="text-muted mt-3">Add a piece to begin checkout.</p>
            <Link to="/shop" className="btn btn-primary mt-8">Shop the Collection</Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-20 bg-cream min-h-screen">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-eyebrow text-muted">Secure Checkout</span>
          <h1
            className="font-serif text-4xl sm:text-5xl text-ink mt-4 leading-[1.05]"
            style={{ fontWeight: 400 }}
          >
            Almost there
          </h1>
          <p className="text-muted text-sm mt-3 inline-flex items-center gap-1.5">
            <Lock size={12} className="text-gold" /> 256-bit encrypted · Powered by Stripe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-10">
            <Section title="Contact">
              <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} required />
            </Section>
            <Section title="Shipping Address">
              <div className="grid grid-cols-2 gap-5">
                <Field label="First Name" name="firstName" value={values.firstName} onChange={handleChange} required />
                <Field label="Last Name"  name="lastName"  value={values.lastName}  onChange={handleChange} required />
              </div>
              <Field label="Address" name="address" value={values.address} onChange={handleChange} required />
              <div className="grid grid-cols-2 gap-5">
                <Field label="City" name="city" value={values.city} onChange={handleChange} required />
                <Field label="Postal Code" name="zip" value={values.zip} onChange={handleChange} required />
              </div>
            </Section>
            <Section title="Payment">
              <p className="text-sm text-muted leading-relaxed">
                This is a demo storefront. No real payment is processed.
              </p>
              <Field label="Card number" name="card" value="" onChange={() => {}} placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-5">
                <Field label="Expiry" name="exp" value="" onChange={() => {}} placeholder="MM/YY" />
                <Field label="CVC"    name="cvc" value="" onChange={() => {}} placeholder="123" />
              </div>
            </Section>
            <button type="submit" className="btn btn-primary w-full">
              Place Order · ${total.toFixed(0)}
            </button>
          </form>

          <aside className="lg:col-span-5">
            <div className="bg-cream-paper border border-hairline p-6 sm:p-8 lg:sticky lg:top-28">
              <h3 className="font-serif text-2xl mb-6">Order Summary</h3>
              <ul className="divide-y divide-hairline">
                {items.map((i) => (
                  <li key={i.key} className="py-4 flex gap-3">
                    <div className="w-16 h-20 bg-cream-warm overflow-hidden flex-shrink-0">
                      <img src={i.image} alt={i.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="label-product text-ink text-[0.7rem]">{i.name}</p>
                      <p className="text-xs text-muted mt-1">
                        {i.variant ? `${i.variant} · ` : ""}Qty {i.quantity}
                      </p>
                    </div>
                    <p className="text-sm text-ink whitespace-nowrap">
                      ${(i.price * i.quantity).toFixed(0)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 text-sm border-t border-hairline pt-5">
                <Row label="Subtotal" value={`$${subtotal.toFixed(0)}`} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping.toFixed(0)}`} />
                <Row label="Total" value={`$${total.toFixed(0)}`} bold />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="label-eyebrow text-ink mb-5">{title}</h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs text-muted label-eyebrow block mb-1">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="field-input"
      />
    </label>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? "pt-3 mt-3 border-t border-hairline text-base font-medium" : "text-muted"}`}>
      <span>{label}</span>
      <span className="text-ink">{value}</span>
    </div>
  );
}
