import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/help/shipping" },
      { label: "Returns & Exchanges", to: "/help/returns" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Contact", to: "/help/contact" },
      { label: "FAQ", to: "/help/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Press", to: "/press" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

function PayMark({ children }) {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2.5 border border-bg/20 text-[10px] uppercase tracking-widest2 text-bg/70 font-medium">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-bg">
      <div className="container-x pt-20 pb-10">
        {/* Top: logo + columns + tagline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] text-bg"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-bg/65 max-w-sm">
              Demi-fine gold jewelry, designed in-house and made to last. Quiet
              luxury for the everyday — and the moments that matter.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 border border-bg/20 hover:border-bg/60 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 border border-bg/20 hover:border-bg/60 transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2 border border-bg/20 hover:border-bg/60 transition-colors"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2 border border-bg/20 hover:border-bg/60 transition-colors"
              >
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="label-cap text-bg/55 mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-bg/80 hover:text-bg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="label-cap text-bg/55 mb-5">Contact</h4>
            <p className="text-[13px] text-bg/80 leading-relaxed">
              hello@velmora.co
              <br />
              Mon–Fri · 9–6 EST
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bg/15 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <p className="text-[12px] text-bg/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PayMark>Visa</PayMark>
            <PayMark>MC</PayMark>
            <PayMark>Amex</PayMark>
            <PayMark>PayPal</PayMark>
            <PayMark>Apple Pay</PayMark>
            <PayMark>Klarna</PayMark>
          </div>
          <div className="flex items-center gap-5 text-[12px] text-bg/55">
            <Link to="/privacy" className="hover:text-bg">Privacy</Link>
            <Link to="/terms" className="hover:text-bg">Terms</Link>
            <Link to="/accessibility" className="hover:text-bg">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
