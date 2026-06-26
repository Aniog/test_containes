import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-navy-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded bg-gold-500 flex items-center justify-center">
              <span className="text-navy-900 font-bold text-sm">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-base tracking-wide leading-tight">
                ARTITECT
              </span>
              <span className="text-gold-400 text-[10px] tracking-[0.2em] leading-tight">
                MACHINERY
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-gold-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-gold-400 text-sm hover:text-gold-300"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2 rounded text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.path
                    ? "text-gold-400"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-gold-500 text-navy-900 px-4 py-2.5 rounded text-sm font-semibold text-center mt-3"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
