import { Link } from 'react-router-dom';
import { Camera, Globe, Link2 } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Contact Us', 'Shipping & Returns', 'FAQ', 'Size Guide', 'Care Guide'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'];

const socialLinks = [
  { label: 'Instagram', icon: Camera, href: '#' },
  { label: 'Pinterest', icon: Globe, href: '#' },
  { label: 'TikTok', icon: Link2, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-deep text-white/80 mt-auto">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest text-white inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, made to be worn every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-white/50 hover:text-velmora-gold transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link}>
                  <Link to="/help" className="text-sm text-white/50 hover:text-velmora-gold transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link}>
                  <Link to="/about" className="text-sm text-white/50 hover:text-velmora-gold transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white/40 hover:text-velmora-gold transition-colors"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span>Visa</span>
            <span>·</span>
            <span>MC</span>
            <span>·</span>
            <span>Amex</span>
            <span>·</span>
            <span>PayPal</span>
            <span>·</span>
            <span>Apple Pay</span>
          </div>
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
