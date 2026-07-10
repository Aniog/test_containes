import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gifts", to: "/shop?category=earrings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Sizing", to: "/help/sizing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Press", to: "/about" },
    ],
  },
];

function PaymentIcon({ children, label }) {
  return (
    <div
      title={label}
      className="h-7 px-2.5 flex items-center justify-center border border-hairline bg-cream text-[10px] uppercase tracking-widest2 text-taupe"
    >
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/85 mt-24">
      <div className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="font-serif text-2xl tracking-[0.32em] text-cream">VELMORA</div>
            <p className="mt-5 text-sm leading-relaxed text-cream/65 max-w-sm">
              Demi-fine jewelry, designed to be worn. Quietly considered, made to be kept.
            </p>
            <div className="flex items-center gap-4 mt-8 text-cream/70">
              <a href="#" aria-label="Instagram" className="hover:text-gold-400 transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold-400 transition-colors">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gold-400 transition-colors">
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="eyebrow text-cream/55 mb-5">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/80 hover:text-gold-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-2">
            <div className="eyebrow text-cream/55 mb-5">Stay close</div>
            <p className="text-sm text-cream/70 mb-4 leading-relaxed">
              Letters from the studio, restocks, and a first look at new pieces.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("email");
                if (email) {
                  e.currentTarget.reset();
                  window.alert("Thank you. Keep an eye on your inbox.");
                }
              }}
              className="flex border-b border-cream/30"
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="flex-1 bg-transparent text-sm py-2 placeholder:text-cream/45 text-cream outline-none"
              />
              <button
                type="submit"
                className="text-[10px] uppercase tracking-widest2 text-gold-400 hover:text-gold-100 transition-colors px-2"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Hairline + bottom */}
        <div className="hairline bg-cream/15 mt-16" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
          <div className="text-[11px] text-cream/55 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa">Visa</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">Amex</PaymentIcon>
            <PaymentIcon label="Apple Pay">Pay</PaymentIcon>
            <PaymentIcon label="Google Pay">G Pay</PaymentIcon>
            <PaymentIcon label="PayPal">PayPal</PaymentIcon>
            <PaymentIcon label="Shop Pay">Shop</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
