import { Link } from 'react-router-dom';
import { Camera, Globe, MessageCircle, CreditCard } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Contact Us', 'Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest text-velmora-gold">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-stone mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed for everyday elegance. Crafted to be treasured, made to be worn.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Social">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Messages">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-gold mb-4">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-gold mb-4">Help</h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-gold mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-velmora-smoke/20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <CreditCard className="w-5 h-5 text-velmora-stone" />
            <span className="text-xs text-velmora-stone">Secure payments · Afterpay available</span>
          </div>
          <p className="text-xs text-velmora-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}