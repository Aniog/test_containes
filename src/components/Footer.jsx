import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl text-white tracking-tight">
            ARTITECT
          </div>
          <div className="eyebrow text-stone-400 mt-2">Machinery</div>
          <p className="mt-6 text-sm leading-relaxed text-stone-400 max-w-xs">
            Precision sheet metal folding machines engineered for fabricators
            who refuse to compromise.
          </p>
        </div>

        <div>
          <div className="eyebrow text-stone-400 mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-amber-500 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-amber-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-amber-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-stone-400 mb-5">Machines</div>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>Double Folding Machines</li>
            <li>Sheet Metal Folders</li>
            <li>Manual Metal Folders</li>
            <li>CNC Folding Systems</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-stone-400 mb-5">Contact</div>
          <ul className="space-y-4 text-sm text-stone-300">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-amber-500" strokeWidth={1.5} />
              <span>
                Industrial Park 14
                <br />
                Stuttgart, Germany
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-amber-500" strokeWidth={1.5} />
              <span>+49 711 2200 4500</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-amber-500" strokeWidth={1.5} />
              <span>hello@artitect-machinery.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Engineered in Germany</p>
        </div>
      </div>
    </footer>
  );
}
