import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const paymentIcons = [
  { name: "Visa", icon: "VISA" },
  { name: "Mastercard", icon: "MC" },
  { name: "Amex", icon: "AMEX" },
  { name: "PayPal", icon: "PayPal" },
  { name: "Apple Pay", icon: "Apple" },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Fine demi-jewelry crafted to be treasured. Every piece tells a story of quiet elegance and enduring beauty.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-sm tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/collections/all"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-sm tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              {["Shipping & Delivery", "Returns & Exchanges", "Care Guide", "FAQ", "Track Order"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Story", "Journal", "Careers", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "About Us" ? "/about" : "#"}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Payment + Social */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {paymentIcons.map((p) => (
              <span
                key={p.name}
                className="text-xs font-medium text-footer-text/60 tracking-wider"
              >
                {p.icon}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-footer-text hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-footer-text hover:text-white transition-colors" aria-label="Pinterest">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.27 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
            <a href="#" className="text-footer-text hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-footer-text/50">
          &copy; 2026 Velmora Fine Jewelry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}