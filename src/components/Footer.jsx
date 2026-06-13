import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-dark font-extrabold text-lg leading-none">
                  AM
                </span>
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold tracking-widest uppercase text-white">
                  ARTITECT
                </span>
                <span className="block text-[10px] font-semibold tracking-widest uppercase text-white/50">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Precision sheet metal folding machines engineered for industrial 
              performance since 1987.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Products', href: '#products' },
                { label: 'About Us', href: '#about' },
                { label: 'Request Quote', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-white/50 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
                'Metal Folding Machine',
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('#products');
                    }}
                    className="text-white/50 hover:text-brand-gold text-sm transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Industriestrasse 42
                  <br />
                  40882 Ratingen, Germany
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                <span className="text-white/50 text-sm">+49 2102 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold flex-shrink-0" />
                <span className="text-white/50 text-sm">sales@artitectmachinery.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs hover:text-brand-gold cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/40 text-xs hover:text-brand-gold cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="text-white/40 text-xs hover:text-brand-gold cursor-pointer transition-colors">
              Cookie Settings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
