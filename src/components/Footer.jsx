import { Link } from "react-router-dom";

const footerColumns = {
  Shop: ["All Jewelry", "Earrings", "Necklaces", "Huggies", "Sets"],
  Help: ["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact"],
  Company: ["About Us", "Our Story", "Journal", "Sustainability", "Careers"],
};

const socialLinks = ["Instagram", "Pinterest", "TikTok"];

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-['Cormorant_Garamond'] text-2xl font-bold tracking-[0.15em]"
            >
              VELMORA
            </Link>
            <p className="text-sm text-[#A8A29E] mt-4 leading-relaxed max-w-[200px]">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, designed for everyday elegance.
            </p>
          </div>

          {/* Columns */}
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.12em] uppercase font-semibold text-[#A8A29E] mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-[#E5DED5] hover:text-[#B8943C] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs tracking-[0.1em] uppercase text-[#A8A29E] hover:text-[#B8943C] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex gap-3 text-[#A8A29E]">
              <span className="text-xs">Visa</span>
              <span className="text-xs">MC</span>
              <span className="text-xs">Amex</span>
              <span className="text-xs">PayPal</span>
              <span className="text-xs">Afterpay</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-[#6B6358]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}