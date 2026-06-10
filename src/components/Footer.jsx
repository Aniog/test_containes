import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-graphite text-mist">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl text-paper tracking-tight">
              Artitect
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent mt-1">
              Machinery
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm text-mist/80 leading-relaxed">
            Precision sheet metal folding machines designed for fabricators
            who care about the line between a product and a piece of work.
            Engineered, assembled and tested in our own facility.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-paper transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-paper transition">Machines</Link></li>
            <li><Link to="/about" className="hover:text-paper transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-paper transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
              <span className="text-mist/80">
                Industriestrasse 12<br />8404 Winterthur, CH
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent shrink-0" />
              <span className="text-mist/80">+41 52 000 12 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent shrink-0" />
              <span className="text-mist/80">sales@artitect-machinery.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-mist/60">
          <p>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Engineered in Switzerland</p>
        </div>
      </div>
    </footer>
  );
}
