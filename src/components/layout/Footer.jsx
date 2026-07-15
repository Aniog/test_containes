import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const productLinks = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-gray">
      {/* Top CTA Band */}
      <div className="bg-brand-steel py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-brand-white text-2xl font-bold mb-1">Ready to Elevate Your Production?</h3>
            <p className="text-brand-gray text-sm">Talk to our engineers and find the right machine for your needs.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all whitespace-nowrap"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-brand-navy font-bold text-base">A</span>
              </div>
              <div>
                <div className="text-brand-white font-bold text-base tracking-wider">ARTITECT</div>
                <div className="text-brand-gold text-xs tracking-widest font-medium uppercase">MACHINERY</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Precision-engineered sheet metal folding machines built for performance, reliability, and longevity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-brand-steel flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-brand-steel flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-sm hover:text-brand-gold transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-white font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Products', path: '/products' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'Get a Quote', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm hover:text-brand-gold transition-colors">
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
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span>Industrial Zone, Manufacturing District<br />Your City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:info@artitect.com" className="hover:text-brand-gold transition-colors">info@artitect.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-steel/30 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-gray/60">
          <span>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</span>
          <span>Precision Engineered. Perfectly Formed.</span>
        </div>
      </div>
    </footer>
  );
}
