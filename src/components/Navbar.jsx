import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center text-white font-bold text-sm">
              SS
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              SSourcing<span className="text-brand-800">China</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-brand-800"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+8613800138000"
              className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900"
            >
              <Phone className="w-4 h-4" />
              <span className="sr-only">Phone</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "bg-slate-50 text-brand-800"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-lg bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
