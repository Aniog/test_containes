import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-brand-gold font-serif font-bold text-2xl tracking-tight">ARTITECT</span>
              <span className="text-brand-white/50 text-xs font-sans tracking-[0.25em] uppercase mt-0.5">MACHINERY</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Precision engineered sheet metal folding machines built for industrial excellence and lasting performance.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folder Machine',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-brand-muted text-sm hover:text-brand-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Products', to: '/products' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-brand-muted text-sm hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-brand-muted text-sm leading-relaxed">Industrial Zone, Manufacturing District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+1234567890" className="text-brand-muted text-sm hover:text-brand-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="text-brand-muted text-sm hover:text-brand-gold transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-sm">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-brand-muted/60 text-xs">
            Precision Engineered. Perfectly Formed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
