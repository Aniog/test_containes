import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-velmora-linen bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest text-velmora-espresso"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-mocha">
              Demi-fine gold jewelry designed for everyday luxury, meaningful
              gifting, and moments worth remembering.
            </p>
            <div className="mt-6 flex items-center gap-4 text-velmora-taupe">
              <a href="#" aria-label="Instagram" className="hover:text-velmora-gold">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-velmora-gold">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-velmora-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-velmora-espresso">
                Shop
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-velmora-mocha">
                <li>
                  <Link to="/shop" className="hover:text-velmora-gold">
                    All Jewelry
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=earrings" className="hover:text-velmora-gold">
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=necklaces" className="hover:text-velmora-gold">
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=huggies" className="hover:text-velmora-gold">
                    Huggies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-velmora-espresso">
                Help
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-velmora-mocha">
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Care Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-velmora-espresso">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-velmora-mocha">
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-velmora-gold">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-widest text-velmora-espresso">
              We Accept
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((brand) => (
                <span
                  key={brand}
                  className="rounded border border-velmora-linen px-2 py-1 text-[10px] uppercase tracking-wider text-velmora-taupe"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-velmora-linen pt-8 text-xs text-velmora-taupe md:flex-row">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-velmora-espresso">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-velmora-espresso">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
