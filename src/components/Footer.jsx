import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1816] text-white/70">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] font-medium text-white"
            >
              VELMORA
            </Link>
            <p className="text-xs mt-4 max-w-[240px] leading-relaxed">
              Demi-fine jewelry designed for everyday luxury. Crafted with care, made
              to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {["All Jewelry", "Earrings", "Necklaces", "Huggies", "Gift Sets"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-xs hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {[
                "Shipping & Returns",
                "Size Guide",
                "Care Instructions",
                "FAQ",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.14em] uppercase text-white font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["Our Story", "Sustainability", "Press", "Careers", "Affiliates"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-xs hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "Amex", "PayPal"].map((card) => (
              <div
                key={card}
                className="bg-white/10 text-white/60 text-[10px] px-2 py-1 rounded"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
