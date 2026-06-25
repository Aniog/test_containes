import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-bone/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-bone">ARTITECT</span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-bone/60">
                Machinery
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-md text-bone/70">
              Precision sheet metal folding machines for studios and
              manufacturers who treat metalwork as architecture. Designed,
              engineered and assembled with care.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-bone mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-accent-soft transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent-soft transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-accent-soft transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent-soft transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-bone mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent-soft" strokeWidth={1.25} />
                <span>hello@artitect-machinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent-soft" strokeWidth={1.25} />
                <span>+1 (415) 555-0142</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-soft" strokeWidth={1.25} />
                <span>14 Foundry Way, Studio B<br/>Brooklyn, NY 11222</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-bone/60">
          <p>© {new Date().getFullYear()} ARTITECT Machinery. All rights reserved.</p>
          <p className="tracking-wide">Engineered in New York · Assembled worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
