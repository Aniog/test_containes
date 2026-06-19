import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { useCart } from "@/lib/cart";
import { getProductById, formatPrice } from "@/lib/products";
import JewelryImage from "@/components/ui/JewelryImage";

export default function Checkout() {
  const { items, summary } = useCart();

  return (
    <>
      <Navbar transparent={false} />
      <CartDrawer />
      <main className="bg-cream">
        <header className="container-page pt-32 md:pt-40 pb-10">
          <p className="eyebrow">Checkout</p>
          <h1 className="mt-3 font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            Almost yours.
          </h1>
        </header>

        <section className="container-page pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            {items.length === 0 ? (
              <div className="border border-line p-10 text-center">
                <p className="font-serif text-2xl text-ink">Your cart is empty.</p>
                <Link to="/shop" className="mt-6 inline-block btn-outline-light">
                  Browse the Collection
                </Link>
              </div>
            ) : (
              <CheckoutForm />
            )}
          </div>
          <aside className="md:col-span-5">
            <div className="bg-ivory border border-line p-6 md:p-8">
              <h2 className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
                Order Summary
              </h2>
              <ul className="mt-6 divide-y divide-line">
                {items.map((item) => {
                  const product = getProductById(item.id);
                  if (!product) return null;
                  return (
                    <li key={`${item.id}-${item.variant || "d"}`} className="py-4 flex gap-4">
                      <div className="w-16 h-20 flex-shrink-0 overflow-hidden bg-cream-warm">
                        <JewelryImage id={product.images[0]} className="w-full h-full" />
                      </div>
                      <div className="flex-1">
                        <p className="product-name">{product.name}</p>
                        <p className="mt-1 font-sans text-xs text-mushroom">
                          {item.variant ? `Finish · ${item.variant}` : "Default"} · Qty {item.qty}
                        </p>
                      </div>
                      <span className="font-sans text-sm text-ink">
                        {formatPrice(product.price * item.qty)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-4 border-t border-line space-y-2">
                <Row label="Subtotal" value={formatPrice(summary.subtotal)} />
                <Row label="Shipping" value="Free" />
                <Row label="Total" value={formatPrice(summary.total)} strong />
              </div>
              <p className="mt-6 font-sans text-[11px] uppercase tracking-widest2 text-mushroom text-center">
                Demo checkout — no payment will be processed.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Row({ label, value, strong }) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`font-sans text-[11px] uppercase tracking-widest2 ${
          strong ? "text-ink" : "text-mushroom"
        }`}
      >
        {label}
      </span>
      <span
        className={`font-sans text-sm ${
          strong ? "text-ink font-medium" : "text-ink"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function CheckoutForm() {
  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset>
        <legend className="font-sans text-[11px] uppercase tracking-widest2 text-ink mb-4">
          Contact
        </legend>
        <Input label="Email" type="email" placeholder="you@email.com" />
      </fieldset>
      <fieldset>
        <legend className="font-sans text-[11px] uppercase tracking-widest2 text-ink mb-4">
          Shipping
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="First name" />
          <Input label="Last name" />
        </div>
        <div className="mt-4">
          <Input label="Address" />
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <Input label="City" />
          <Input label="State / Region" />
          <Input label="Postal code" />
        </div>
        <div className="mt-4">
          <Input label="Country" />
        </div>
      </fieldset>
      <fieldset>
        <legend className="font-sans text-[11px] uppercase tracking-widest2 text-ink mb-4">
          Payment
        </legend>
        <Input label="Card number" placeholder="1234  5678  9012  3456" />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Input label="MM / YY" placeholder="08 / 28" />
          <Input label="Security code" placeholder="CVC" />
        </div>
      </fieldset>
      <button type="submit" className="w-full btn-gold">
        Place Order
      </button>
    </form>
  );
}

function Input({ label, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="block mb-1.5 font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-ivory border border-line px-4 py-3 font-sans text-sm text-ink placeholder:text-mushroom focus:outline-none focus:border-ink"
      />
    </label>
  );
}
