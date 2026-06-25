import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-block w-9 h-9 border border-paper flex items-center justify-center">
              <span className="font-display text-paper text-lg leading-none">A</span>
            </span>
            <span className="font-display text-paper text-lg tracking-[0.25em]">
              ARTITECT MACHINERY
            </span>
          </Link>
          <p className="mt-6 text-paper/70 max-w-md leading-relaxed">
            Precision-engineered double folders and sheet metal folding machines
            for fabricators, architectural panel makers, and HVAC manufacturers
            worldwide.
          </p>
          <div className="mt-8 h-px bg-paper/10" />
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-brass">
            Engineered for the next bend
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-5">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-paper/80">
            <li><Link to="/" className="hover:text-paper transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-paper transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-paper transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-paper transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-5">
            Contact
          </p>
          <ul className="space-y-4 text-sm text-paper/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-brass shrink-0" />
              <span>Unit 14, Steelworks Park<br />Sheffield, United Kingdom</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brass shrink-0" />
              <span>+44 (0)114 555 0192</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brass shrink-0" />
              <span>hello@artitect-machinery.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Precision · Steel · Craft</p>
        </div>
      </div>
    </footer>
  );
}
