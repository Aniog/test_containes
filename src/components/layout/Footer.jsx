import { Link } from "react-router-dom";
import { Instagram, Mail, Send } from "lucide-react";
import { useState } from "react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?collection=earrings" },
      { label: "Necklaces", to: "/shop?collection=necklaces" },
      { label: "Huggies", to: "/shop?collection=huggies" },
      { label: "Gift Sets", to: "/shop?collection=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Care Guide", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Order Status", to: "#" },
      { label: "Contact Us", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "The Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

function PaymentBadge({ label }) {
  return (
    <span className="inline-flex items-center justify-center h-6 px-2 border border-line rounded-sm text-[10px] uppercase tracking-[0.18em] text-taupe font-medium">
      {label}
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-ink text-bone mt-24">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl tracking-[0.32em] font-light">
              VELMORA
            </p>
            <p className="mt-5 max-w-sm text-bone/70 text-sm leading-relaxed">
              Demi-fine gold jewelry, designed in our atelier and made to be worn
              — not stored. Quiet luxury for the everyday ritual.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 2500);
                setEmail("");
              }}
              className="mt-8 max-w-sm"
            >
              <label
                htmlFor="footer-email"
                className="eyebrow text-bone/60 block mb-3"
              >
                The Atelier Letter
              </label>
              <div className="flex items-center border-b border-bone/30 focus-within:border-bone transition-colors duration-300">
                <Mail
                  className="w-4 h-4 text-bone/60 mr-3"
                  strokeWidth={1.25}
                />
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent py-3 text-sm placeholder:text-bone/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 -mr-2 text-bone/80 hover:text-bone transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" strokeWidth={1.25} />
                </button>
              </div>
              <p
                className={`mt-2 text-xs text-bone/60 transition-opacity duration-300 ${
                  submitted ? "opacity-100" : "opacity-0"
                }`}
              >
                Thank you — your first note is on its way.
              </p>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="eyebrow text-bone/60 mb-5">{col.title}</h4>
              <ul className="space-y-3 text-sm text-bone/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="hover:text-bone transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 flex lg:flex-col gap-4 items-start">
            <a
              href="#"
              aria-label="Instagram"
              className="text-bone/80 hover:text-bone transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.25} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="text-bone/80 hover:text-bone transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4c-1.1 0-2-.4-2.7-1.1" />
                <path d="M10 14l-1 7" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-bone/80 hover:text-bone transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12v6a3 3 0 0 0 6 0v-4" />
                <path d="M15 4v8a4 4 0 0 0 4-4" />
                <path d="M15 4a4 4 0 0 1-4-4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hairline bg-bone/15 mt-16 mb-8" />

        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-bone/50">
          <p>© {new Date().getFullYear()} Velmora Atelier. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentBadge label="Visa" />
            <PaymentBadge label="Mastercard" />
            <PaymentBadge label="Amex" />
            <PaymentBadge label="Apple Pay" />
            <PaymentBadge label="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
}
