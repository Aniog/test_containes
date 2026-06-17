import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

const productLinks = [
  { name: 'Double Folding Machine', path: '/products' },
  { name: 'Double Folder', path: '/products' },
  { name: 'Sheet Metal Folder', path: '/products' },
  { name: 'Metal Folding Machine', path: '/products' },
  { name: 'Metal Folder', path: '/products' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-brand-900 font-bold text-lg">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white text-lg leading-tight">ARTITECT</span>
                <span className="text-xs text-steel-300 tracking-widest uppercase -mt-0.5">Machinery</span>
              </div>
            </div>
            <p className="text-steel-300 text-sm leading-relaxed mb-6">
              Precision engineering for metal folding solutions. Serving industries worldwide with cutting-edge machinery and exceptional support.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-steel-300 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-steel-300 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-steel-300 text-sm">
                  123 Industry Avenue,<br />
                  Industrial Zone, Shanghai, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="tel:+861234567890" className="text-steel-300 hover:text-white text-sm transition-colors">
                  +86 123 4567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="text-steel-300 hover:text-white text-sm transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-steel-300 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-700/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-400 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-steel-500 text-xs">
            Precision Metal Folding Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}