import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-xl tracking-[0.25em] font-semibold text-white">
                VELMORA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Demi-fine jewelry designed to be worn, loved, and treasured for years to come.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              {["Earrings", "Necklaces", "Huggies", "Sets", "New Arrivals", "Bestsellers"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-4">Help</h3>
            <ul className="space-y-2">
              {["Contact Us", "Shipping & Returns", "Size Guide", "FAQ", "Jewelry Care"].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-sm hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {["Our Story", "Sustainability", "Press", "Careers", "Affiliates"].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-sm hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-stone-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
