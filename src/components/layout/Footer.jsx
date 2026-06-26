import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 max-w-md">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-600 text-white font-serif text-lg leading-none">
                A
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-stone-50 tracking-wide">
                  ARTITECT
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-stone-400">
                  Machinery
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm text-stone-400 leading-relaxed">
              Engineering precision folding machinery for fabricators who refuse
              to settle for ordinary. Built to fold. Designed to last.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-medium">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-stone-50">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-300 hover:text-stone-50">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-stone-50">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-stone-50">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-medium">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-stone-300">
                  Industrial Park, Building 4<br />Milan, Italy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+390000000000" className="text-stone-300 hover:text-stone-50">
                  +39 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:hello@artitect.example" className="text-stone-300 hover:text-stone-50">
                  hello@artitect.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-700/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            Precision folding machinery — designed and built in Europe.
          </p>
        </div>
      </div>
    </footer>
  );
}
