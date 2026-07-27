import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/products", label: "Products We Source" },
  { path: "/case-studies", label: "Case Studies" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary-800 leading-tight">SSourcing</span>
              <span className="text-xs text-slate-500 leading-tight -mt-0.5">China</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-primary-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 px-5 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg text-sm text-center transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}