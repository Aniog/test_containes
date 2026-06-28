import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

const COLUMNS = [
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
      { label: "Shipping", to: "#" },
      { label: "Returns", to: "#" },
      { label: "Jewelry Care", to: "#" },
      { label: "FAQ", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1410] text-[#F7F2EA]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl md:text-4xl tracking-[0.25em] font-light"
            >
              VELMORA
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#D9BE85]/80">
              Demi-fine jewelry, crafted to be treasured. Hand-finished in small batches,
              shipped from our atelier worldwide.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="hover:text-[#D9BE85] transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#D9BE85] transition-colors">
                <Twitter className="w-5 h-5" strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#D9BE85] transition-colors">
                <Youtube className="w-5 h-5" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#D9BE85] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm text-[#F7F2EA]/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="hover:text-[#D9BE85] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#D9BE85] mb-5">
              We accept
            </h4>
            <div className="grid grid-cols-3 gap-2 max-w-[200px]">
              {["VISA", "MC", "AMEX", "PAYPAL", "APPLE", "GPAY"].map((p) => (
                <div
                  key={p}
                  className="h-7 border border-[#F7F2EA]/20 rounded-sm text-[9px] tracking-widest flex items-center justify-center text-[#F7F2EA]/70"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#F7F2EA]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F2EA]/60">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D9BE85]">Privacy</a>
            <a href="#" className="hover:text-[#D9BE85]">Terms</a>
            <a href="#" className="hover:text-[#D9BE85]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
