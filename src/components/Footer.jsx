import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-tight">ARTITECT</span>
                <span className="text-[10px] font-medium tracking-[0.25em] uppercase leading-tight text-gold">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed">
              Precision-engineered metal folding solutions for industrial excellence. 
              Trusted by manufacturers worldwide since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-6 text-gold">Products</h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-navy-200 text-sm hover:text-gold transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-6 text-gold">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Our Products', to: '/products' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-navy-200 text-sm hover:text-gold transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-navy-200 text-sm">Industrial Zone, 888 Machinery Ave, Shanghai, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-navy-200 text-sm">+86 21 5888 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-navy-200 text-sm">info@artitect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-500 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-300 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
