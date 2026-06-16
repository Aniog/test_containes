import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-stone-300">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber flex items-center justify-center rounded">
                <span className="text-charcoal font-extrabold text-lg tracking-tighter">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-[0.25em] uppercase leading-none">
                  Artitect
                </span>
                <span className="text-amber text-[10px] tracking-[0.3em] uppercase font-medium leading-none mt-0.5">
                  Machinery
                </span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Precision engineering for sheet metal excellence. Over 25 years of innovation in folding machine technology.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                <span>Industriestrasse 42, 70565 Stuttgart, Germany</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber flex-shrink-0" />
                <span>+49 711 555 0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber flex-shrink-0" />
                <span>info@artitect-machinery.com</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {['Double Folding Machines', 'Sheet Metal Folders', 'CNC Metal Folders', 'Heavy-Duty Folders', 'Precision Folders', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-stone-400 hover:text-amber transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our History', path: '/about' },
                { label: 'Careers', path: '/contact' },
                { label: 'News & Updates', path: '/about' },
                { label: 'Sustainability', path: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-stone-400 hover:text-amber transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Stay Updated
            </h4>
            <p className="text-stone-400 text-sm mb-4">
              Get the latest product updates, industry insights, and technical articles.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-charcoal-light border border-stone-700 rounded-l-lg px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber transition-colors"
              />
              <button
                type="submit"
                className="bg-amber text-charcoal px-4 rounded-r-lg hover:bg-amber-light transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Imprint</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
