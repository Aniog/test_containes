import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-velmora-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-velmora-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/collection"
              className="text-sm text-velmora-dark/80 hover:text-velmora-gold transition-colors tracking-wider uppercase"
            >
              Shop
            </Link>
            <Link
              to="/collection"
              className="text-sm text-velmora-dark/80 hover:text-velmora-gold transition-colors tracking-wider uppercase"
            >
              Collections
            </Link>
            <Link
              to="/"
              className="text-sm text-velmora-dark/80 hover:text-velmora-gold transition-colors tracking-wider uppercase"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-sm text-velmora-dark/80 hover:text-velmora-gold transition-colors tracking-wider uppercase"
            >
              Journal
            </Link>
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors ${
              scrolled ? "text-velmora-dark" : "text-velmora-light"
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`hover:text-velmora-gold transition-colors ${
                scrolled ? "text-velmora-dark" : "text-velmora-light"
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className={`relative hover:text-velmora-gold transition-colors ${
                scrolled ? "text-velmora-dark" : "text-velmora-light"
              }`}
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-border">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/collection"
              className="block text-sm text-velmora-dark/80 hover:text-velmora-gold tracking-wider uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/collection"
              className="block text-sm text-velmora-dark/80 hover:text-velmora-gold tracking-wider uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/"
              className="block text-sm text-velmora-dark/80 hover:text-velmora-gold tracking-wider uppercase"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              to="/"
              className="block text-sm text-velmora-dark/80 hover:text-velmora-gold tracking-wider uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}