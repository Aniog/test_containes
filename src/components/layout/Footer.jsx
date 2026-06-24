import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Pieces" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/collections", label: "Collections" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/", label: "Shipping & Returns" },
      { to: "/", label: "Care Guide" },
      { to: "/", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/", label: "Sustainability" },
      { to: "/", label: "Materials" },
      { to: "/", label: "Press" },
      { to: "/", label: "Affiliates" },
      { to: "/", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-display text-3xl tracking-[0.18em] text-ivory"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-ivory/70 text-[14px] leading-[1.7] max-w-sm">
              Quiet luxury, demi-fine gold jewelry designed in our atelier and
              finished by hand. Built to be worn daily, given often, and kept.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 text-ivory/80 hover:text-gold-soft transition-colors"
              >
                <Instagram size={18} strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email us"
                className="p-2 text-ivory/80 hover:text-gold-soft transition-colors"
              >
                <Mail size={18} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow eyebrow-ivory mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[14px] text-ivory/80 hover:text-gold-soft transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] tracking-widest2 uppercase text-ivory/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry · Crafted with care
          </p>
          <div className="flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-ivory/55">
            <span className="px-2.5 py-1 border border-ivory/25">Visa</span>
            <span className="px-2.5 py-1 border border-ivory/25">Mastercard</span>
            <span className="px-2.5 py-1 border border-ivory/25">Amex</span>
            <span className="px-2.5 py-1 border border-ivory/25">Apple Pay</span>
            <span className="px-2.5 py-1 border border-ivory/25">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}