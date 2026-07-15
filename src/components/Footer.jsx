import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Press', 'Affiliates'];

export default function Footer() {
  return (
    <footer className="bg-velvet text-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-super text-goldpale font-semibold">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-taupe mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated pieces designed to be treasured.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-taupe hover:text-goldlight transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-taupe hover:text-goldlight transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-taupe hover:text-goldlight transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-goldpale mb-4">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="font-sans text-sm text-taupe hover:text-goldlight transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-goldpale mb-4">Help</h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="font-sans text-sm text-taupe hover:text-goldlight transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-goldpale mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="font-sans text-sm text-taupe hover:text-goldlight transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline border-taupe/20 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-taupe font-sans tracking-wider uppercase">
            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
