import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact us", to: "/about" },
      { label: "Shipping", to: "/about" },
      { label: "Returns", to: "/about" },
      { label: "Care guide", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
    ],
  },
];

function PaymentBadge({ children }) {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2.5 rounded-[5px] border border-white/15 bg-white/5 text-[10px] tracking-wider2 uppercase text-ivory-100/80 font-sans">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso-200 text-ivory-100/80">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="font-serif tracking-widest2 text-3xl text-ivory-50">VELMORA</div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-100/70">
              Demi-fine jewelry, considered and made to last. Designed in small batches,
              finished in 18K gold plate, intended for every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Velmora on Instagram"
                className="hover:text-ivory-50 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email Velmora"
                className="hover:text-ivory-50 transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-[11px] tracking-widest2 uppercase text-ivory-50/90 mb-4">
                {col.title}
              </div>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-ivory-50 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <div className="text-[11px] tracking-widest2 uppercase text-ivory-50/90 mb-4">
              Stay close
            </div>
            <p className="text-sm text-ivory-100/70 mb-4 leading-relaxed">
              Quiet notes from the studio. New pieces, no noise.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = form.email.value;
                if (!email) return;
                form.reset();
                form.querySelector("button")?.classList.add("text-gold-300");
              }}
              className="flex items-center border-b border-white/20 pb-2"
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 bg-transparent border-0 outline-none text-sm placeholder:text-ivory-100/40 text-ivory-50"
              />
              <button
                type="submit"
                className="text-[10px] tracking-widest2 uppercase text-ivory-50/90 hover:text-gold-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="divider-hair mt-16 mb-8 bg-white/15" />

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-ivory-100/50 tracking-wider2 uppercase">
            © 2026 Velmora Fine Jewelry · All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>Amex</PaymentBadge>
            <PaymentBadge>Apple Pay</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}
