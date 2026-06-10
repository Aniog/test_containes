import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
              <span className="font-serif text-2xl tracking-wider">
                ARTITECT
                <span className="ml-1.5 text-silver font-light">MACHINERY</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-silver text-[15px] leading-relaxed">
              Precision-engineered sheet metal folding machines. Designed for the
              workshop floor, calibrated for the millimetre.
            </p>
            <div className="mt-10 h-px w-12 bg-accent" />
            <p className="mt-6 font-mono text-xs uppercase tracking-widest2 text-silver">
              Est. 1998 — Engineered in Europe
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest2 text-accent font-medium">
              Navigate
            </h4>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li><Link to="/" className="text-bone hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-bone hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-bone hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-bone hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest2 text-accent font-medium">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-[15px] text-silver">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span>Industriestrasse 14, 8005 Zürich, Switzerland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+41 44 000 12 34</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:hello@artitect-machinery.com" className="hover:text-bone transition-colors">
                  hello@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-silver tracking-wide">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-silver tracking-widest2 uppercase font-mono">
            Precision · Endurance · Craft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
