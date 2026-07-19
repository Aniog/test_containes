import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { PRODUCT_IMAGES } from "@/data/realImages";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [placed, lines.length]);

  if (lines.length === 0 && !placed) {
    return (
      <div className="bg-bone">
        <div className="container-page pt-32 pb-24 text-center max-w-prose mx-auto">
          <p className="eyebrow">Checkout</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl font-light leading-[1.05] text-ink">
            Nothing to check out.
          </h1>
          <p className="mt-5 text-ink/70">
            Your bag is empty. Begin with a piece from the collection.
          </p>
          <Link to="/shop" className="btn-primary mt-8">
            Shop the Collection
          </Link>
        </div>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="bg-bone">
        <div className="container-page pt-32 pb-24 text-center max-w-prose mx-auto">
          <span className="inline-flex items-center justify-center w-14 h-14 bg-ink text-bone">
            <Check className="w-6 h-6" strokeWidth={1.5} />
          </span>
          <p className="eyebrow mt-8">Order placed</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl font-light leading-[1.05] text-ink">
            Thank you.
          </h1>
          <p className="mt-5 text-ink/70">
            A confirmation is on its way to your inbox. Your pieces are
            hand-finished and dispatched from our atelier in Lisbon within 1–2
            business days.
          </p>
          <Link to="/shop" className="btn-outline mt-8">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-bone">
      <div className="container-page pt-28 sm:pt-32 pb-24">
        <p className="eyebrow">Checkout</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-light leading-[1.05] text-ink">
          A few final details
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPlaced(true);
              clear();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="lg:col-span-7 space-y-10"
          >
            <section>
              <h2 className="product-name text-ink mb-5">Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email" type="email" required defaultValue="" />
                <Field label="Phone" type="tel" defaultValue="" />
              </div>
            </section>
            <section>
              <h2 className="product-name text-ink mb-5">Shipping</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First name" required />
                <Field label="Last name" required />
                <Field label="Address" required className="sm:col-span-2" />
                <Field label="City" required />
                <Field label="Postal code" required />
                <Field label="Country" required defaultValue="United States" />
              </div>
            </section>
            <section>
              <h2 className="product-name text-ink mb-5">Payment</h2>
              <div className="border border-line p-5 text-sm text-ink/70">
                Payment integration is not connected in this preview. Use the
                "Place order" button to simulate a successful checkout.
              </div>
            </section>
            <button type="submit" className="btn-primary w-full">
              Place order · {formatPrice(subtotal)}
            </button>
          </form>

          <aside className="lg:col-span-5">
            <div className="bg-cream p-6 sm:p-7 border border-line lg:sticky lg:top-28">
              <h2 className="product-name text-ink mb-5">Order summary</h2>
              <ul className="divide-y divide-line">
                {lines.map((line) => {
                  const imgs = PRODUCT_IMAGES[line.product.id];
                  const imgUrl = imgs?.primary || PLACEHOLDER;
                  return (
                    <li
                      key={`${line.id}-${line.variant}`}
                      className="py-4 flex gap-3"
                    >
                      <div className="w-16 h-20 bg-bone overflow-hidden shrink-0 relative">
                        <img
                          alt=""
                          aria-hidden="true"
                          src={imgUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 inline-flex items-center justify-center bg-ink text-bone text-[10px] font-medium rounded-full">
                          {line.qty}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="product-name truncate">
                          {line.product.name}
                        </p>
                        <p className="mt-1 text-xs text-taupe">
                          {line.variant}
                        </p>
                      </div>
                      <p className="text-sm font-medium shrink-0">
                        {formatPrice(line.product.price * line.qty)}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 space-y-2 text-sm">
                <Row label="Subtotal" value={formatPrice(subtotal)} />
                <Row label="Shipping" value="Complimentary" muted />
                <div className="hairline my-3" />
                <Row
                  label="Total"
                  value={formatPrice(subtotal)}
                  emphasis
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="eyebrow block mb-2">{label}</span>
      <input
        {...props}
        className="w-full bg-transparent border-b border-line focus:border-ink py-3 text-sm placeholder:text-taupe focus:outline-none transition-colors duration-300"
      />
    </label>
  );
}

function Row({ label, value, muted, emphasis }) {
  return (
    <div
      className={`flex items-center justify-between ${
        emphasis ? "text-base" : ""
      }`}
    >
      <span className={muted ? "text-ink/60" : "text-ink/80"}>{label}</span>
      <span className={emphasis ? "font-serif text-2xl font-light" : ""}>
        {value}
      </span>
    </div>
  );
}
