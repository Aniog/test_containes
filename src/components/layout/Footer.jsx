import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-graphite text-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-baseline gap-2 mb-5">
            <span className="font-serif text-2xl text-bone">ARTITECT</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brass">
              Machinery
            </span>
          </Link>
          <p className="text-mist/80 max-w-md leading-relaxed font-light">
            Precision sheet metal folding machines, double folders, and CNC
            metal folding systems —{" "}
            <span className="font-serif italic text-brass">
              engineered for fabricators who care
            </span>{" "}
            about every fold.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-mist/80">
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
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-mist/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-brass shrink-0" />
              <span>
                14 Kiln Lane, Industrial Park
                <br />
                Sheffield, S9 3LP, United Kingdom
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brass shrink-0" />
              <span>+44 114 220 8800</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brass shrink-0" />
              <span>hello@artitect.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-mist/60">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p className="font-serif italic text-brass">
            Folded straight. Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
