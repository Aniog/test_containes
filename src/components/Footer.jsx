import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-steel-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-copper-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/>
                  <path d="M7 3v18M17 3v18" strokeLinecap="round" strokeOpacity="0.6"/>
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-serif font-bold text-lg tracking-wide">ARTITECT</span>
                <span className="block text-mid-gray text-xs tracking-widest uppercase">MACHINERY</span>
              </div>
            </div>
            <p className="text-mid-gray text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines trusted by manufacturers worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-copper-gold hover:text-copper-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-copper-gold hover:text-copper-gold transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
                'Metal Folding Machine',
              ].map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-mid-gray text-sm hover:text-copper-gold transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-mid-gray text-sm hover:text-copper-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-5 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-copper-gold mt-0.5 flex-shrink-0" />
                <span className="text-mid-gray text-sm leading-relaxed">
                  Industrial Zone, Manufacturing District
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-copper-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-mid-gray text-sm hover:text-copper-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-copper-gold flex-shrink-0" />
                <a href="mailto:info@artitect.com" className="text-mid-gray text-sm hover:text-copper-gold transition-colors">
                  info@artitect.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mid-gray text-sm">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-mid-gray text-xs tracking-wide">
            Precision Engineered. Perfectly Folded.
          </p>
        </div>
      </div>
    </footer>
  );
}
