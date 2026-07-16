import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, ChevronRight } from "lucide-react";

export default function Footer() {
  const columns = [
    {
      title: "Shop",
      links: ["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"],
    },
    {
      title: "Help",
      links: ["Shipping & Returns", "FAQ", "Size Guide", "Care Guide", "Contact Us"],
    },
    {
      title: "Company",
      links: ["Our Story", "Journal", "Sustainability", "Careers", "Press"],
    },
  ];

  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-semibold text-velmora-gold-light"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-taupe-light leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Each piece is designed to be
              treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-velmora-taupe/40 flex items-center justify-center text-velmora-taupe-light hover:text-velmora-gold-light hover:border-velmora-gold-light transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase font-sans font-semibold text-velmora-gold-light mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-velmora-taupe-light hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-velmora-taupe/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-taupe-light">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {["Visa", "Mastercard", "Amex", "PayPal", "Afterpay"].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider uppercase text-velmora-taupe-light/60 border border-velmora-taupe/20 px-2.5 py-1 rounded"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}