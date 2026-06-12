import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <span aria-hidden className="inline-block w-2 h-8 bg-gold" />
            <span className="font-serif text-2xl tracking-tight text-bone">
              ARTITECT
              <span className="text-mist font-sans text-xs uppercase tracking-[0.3em] ml-2 align-middle">
                Machinery
              </span>
            </span>
          </div>
          <p className="text-mist max-w-md leading-relaxed">
            Precision sheet metal folding machines, engineered for workshops
            that refuse to compromise. Built to last, designed to be calm,
            elegant and effortless to operate.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-mist">
            <li>
              <Link to="/" className="hover:text-bone transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-bone transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-bone transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-bone transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-mist">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>Industrial Park 12, 33100 Udine, Italy</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <span>+39 0432 555 010</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <span>hello@artitect-machinery.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mist/70">
            © {year} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-mist/70 tracking-[0.2em] uppercase">
            Designed & Built in Italy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
