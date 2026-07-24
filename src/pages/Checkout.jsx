import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function Checkout() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 sm:px-8 lg:px-12 py-32 text-center">
        <p className="eyebrow">Checkout</p>
        <h1 className="mt-3 font-serif text-4xl text-ink-800">Your bag is empty</h1>
        <Link to="/shop" className="btn-primary mt-8">Shop the Collection</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-28 sm:py-32">
      <p className="eyebrow">Checkout</p>
      <h1 className="mt-3 font-serif text-4xl text-ink-800">Almost there</h1>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend className="font-serif text-2xl text-ink-800">Contact</legend>
            <input type="email" required placeholder="you@example.com"
              className="mt-4 w-full border border-ink-800/20 bg-transparent px-4 py-3 text-sm focus:border-gold-400 focus:outline-none" />
          </fieldset>
          <fieldset>
            <legend className="font-serif text-2xl text-ink-800">Shipping</legend>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" placeholder="First name" className="border border-ink-800/20 bg-transparent px-4 py-3 text-sm focus:border-gold-400 focus:outline-none" />
              <input type="text" placeholder="Last name" className="border border-ink-800/20 bg-transparent px-4 py-3 text-sm focus:border-gold-400 focus:outline-none" />
              <input type="text" placeholder="Address" className="sm:col-span-2 border border-ink-800/20 bg-transparent px-4 py-3 text-sm focus:border-gold-400 focus:outline-none" />
              <input type="text" placeholder="City" className="border border-ink-800/20 bg-transparent px-4 py-3 text-sm focus:border-gold-400 focus:outline-none" />
              <input type="text" placeholder="Postal code" className="border border-ink-800/20 bg-transparent px-4 py-3 text-sm focus:border-gold-400 focus:outline-none" />
            </div>
          </fieldset>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Place Order — {formatPrice(subtotal)}
          </button>
          <p className="text-[12px] text-ink-500">
            This is a demo storefront. No payment is processed.
          </p>
        </form>

        <aside className="bg-ivory-100 p-6 sm:p-8 self-start">
          <h2 className="font-serif text-2xl text-ink-800">Order Summary</h2>
          <ul className="mt-4 divide-y divide-ink-800/10">
            {items.map((i) => (
              <li key={`${i.product.slug}-${i.variantId}`} className="flex justify-between py-3 text-sm">
                <span className="text-ink-700">{i.product.name} × {i.qty}</span>
                <span className="text-ink-800">{formatPrice(i.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-ink-800/10 pt-4 flex justify-between">
            <span className="font-sans uppercase tracking-widest2 text-[11px] text-ink-500">Subtotal</span>
            <span className="text-ink-800">{formatPrice(subtotal)}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-ink-500">
            <span>Shipping</span>
            <span>Calculated next</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
