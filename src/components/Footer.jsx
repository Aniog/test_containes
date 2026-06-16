import { Link } from 'react-router-dom';
import { Factory, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Factory className="w-6 h-6 text-brand-gold" />
              <span className="text-lg font-bold tracking-wide">ARTITECT MACHINERY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision-engineered sheet metal folding machines built for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-brand-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-brand-gold">
              Products
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Double Folding Machine</li>
              <li>Double Folder</li>
              <li>Sheet Metal Folder</li>
              <li>Sheet Metal Folding Machine</li>
              <li>Metal Folder Machine</li>
              <li>Metal Folding Machine</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-brand-gold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                <span>Industrial Zone, Building 42, Manufacturing District</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Precision. Performance. Perfection.
          </p>
        </div>
      </div>
    </footer>
  );
}
