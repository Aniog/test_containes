import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-brand-silver">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-playfair text-2xl font-bold text-white block">ARTITECT</span>
              <span className="text-xs font-inter font-medium text-brand-gold tracking-[0.25em] uppercase">MACHINERY</span>
            </div>
            <p className="text-sm leading-relaxed text-brand-silver mb-6">
              Precision-engineered sheet metal folding machines trusted by manufacturers worldwide. Built to last, designed to perform.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-brand-silver/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-brand-silver/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-playfair text-white font-semibold text-base mb-5">Products</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 hover:text-brand-gold transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-playfair text-white font-semibold text-base mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Products', path: '/products' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Get a Quote', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-brand-gold transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-playfair text-white font-semibold text-base mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span>Industrial Zone, Manufacturing District<br />Global Operations</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="hover:text-brand-gold transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-silver/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-silver/60">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p>Precision Engineered. Perfectly Formed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
