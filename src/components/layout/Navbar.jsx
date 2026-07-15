import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-warm-800" />
            ) : (
              <Menu className="w-5 h-5 text-warm-800" />
            )}
          </button>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className="text-xs tracking-[0.15em] uppercase text-warm-700 hover:text-warm-900 transition-colors font-sans font-medium"
            >
              Shop
            </Link>
            <Link
              to="/collections"
              className="text-xs tracking-[0.15em] uppercase text-warm-700 hover:text-warm-900 transition-colors font-sans font-medium"
            >
              Collections
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.2em] transition-colors ${
              scrolled || !isHome ? "text-warm-900" : "text-white"
            }`}
          >
            VELMORA
          </Link>

          {/* Center links - desktop (right side) */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className="text-xs tracking-[0.15em] uppercase text-warm-700 hover:text-warm-900 transition-colors font-sans font-medium"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-xs tracking-[0.15em] uppercase text-warm-700 hover:text-warm-900 transition-colors font-sans font-medium"
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 transition-colors ${
                scrolled || !isHome
                  ? "text-warm-700 hover:text-warm-900"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative p-2 transition-colors ${
                scrolled || !isHome
                  ? "text-warm-700 hover:text-warm-900"
                  : "text-white/90 hover:text-white"
              }`}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold-600 text-white text-[10px] font-sans font-bold w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 bg-[#FAF7F2] border-t border-warm-200 space-y-3">
          <Link
            to="/shop"
            className="block py-2 text-sm tracking-[0.15em] uppercase text-warm-800 font-sans"
          >
            Shop
          </Link>
          <Link
            to="/collections"
            className="block py-2 text-sm tracking-[0.15em] uppercase text-warm-800 font-sans"
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="block py-2 text-sm tracking-[0.15em] uppercase text-warm-800 font-sans"
          >
            About
          </Link>
          <Link
            to="/journal"
            className="block py-2 text-sm tracking-[0.15em] uppercase text-warm-800 font-sans"
          >
            Journal
          </Link>
        </div>
      </div>
    </header>
  );
}