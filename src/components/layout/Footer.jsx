import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const cols = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Contact Us" },
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
      { to: "#", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
      { to: "#", label: "Careers" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-espresso text-ink-onDark">
      <div className="container-editorial pt-20 pb-10 md:pt-28 md:pb-12">
        {/* Top: brand + columns */}
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-2xl tracking-wider2">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm font-serif text-lg italic text-ink-onDarkSecondary leading-relaxed">
              Demi-fine jewelry, designed in small batches and made to be worn
              every day, then handed down.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-8 flex max-w-md items-center border-b border-line-dark"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-ink-onDarkMuted focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 inline-flex items-center gap-2 py-3 text-[11px] uppercase tracking-wider2 text-ink-onDark hover:text-gold-soft"
              >
                Subscribe <ArrowRight size={14} strokeWidth={1.4} />
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-xs text-gold-soft tracking-wide">
                Thank you. Welcome to the inner circle.
              </p>
            )}
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-wider3 text-ink-onDarkSecondary font-medium">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-ink-onDark/80 hover:text-ink-onDark transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hairline */}
        <div className="mt-16 hairline hairline-on-dark" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-onDarkSecondary tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {paymentMethods.map((p) => (
              <span
                key={p}
                className="rounded-sm border border-line-dark px-2.5 py-1 text-[10px] uppercase tracking-wider2 text-ink-onDarkSecondary"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-ink-onDarkSecondary">
            <a href="#" aria-label="Instagram" className="hover:text-ink-onDark transition-colors">
              <Instagram size={18} strokeWidth={1.4} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-ink-onDark transition-colors">
              <Facebook size={18} strokeWidth={1.4} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-ink-onDark transition-colors">
              <Youtube size={18} strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
