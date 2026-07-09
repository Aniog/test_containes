import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-base-800 py-16 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-[0.18em] text-white"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Demi-fine jewelry crafted to be treasured. Made for everyday
              luxury and the moments worth remembering.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Shop
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <Link to="/shop" className="hover:text-gold">All Jewelry</Link>
              </li>
              <li>
                <Link to="/shop?category=Earrings" className="hover:text-gold">Earrings</Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="hover:text-gold">Necklaces</Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="hover:text-gold">Huggies</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Help
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a href="#" className="hover:text-gold">Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">Care Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a href="#" className="hover:text-gold">Our Story</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">Sustainability</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">Press</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-cream/70">
            <a href="#" aria-label="Instagram" className="hover:text-gold">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gold">
              <Twitter size={18} />
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
