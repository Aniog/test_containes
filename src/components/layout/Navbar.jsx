import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg =
    scrolled || !isHome
      ? "bg-cream-50/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";
  const textColor =
    scrolled || !isHome ? "text-clay-800" : "text-cream-50";
  const borderColor =
    scrolled || !isHome ? "border-cream-200" : "border-cream-50/20";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} border-b ${borderColor}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${textColor}`} />
            ) : (
              <Menu className={`w-5 h-5 ${textColor}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-wide-2xl ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`nav-link ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop" className={`nav-link ${textColor}`}>
              Collections
            </Link>
            <Link to="/" className={`nav-link ${textColor}`}>
              About
            </Link>
            <Link to="/" className={`nav-link ${textColor}`}>
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 hidden sm:block ${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`p-2 relative ${textColor} hover:opacity-70 transition-opacity`}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-clay-800 text-cream-50 text-[10px] font-medium rounded-full flex items-center justify-center">
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
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-cream-50 border-t border-cream-200">
          <Link
            to="/shop"
            className="block nav-link text-clay-800 py-2"
          >
            Shop
          </Link>
          <Link
            to="/shop"
            className="block nav-link text-clay-800 py-2"
          >
            Collections
          </Link>
          <Link to="/" className="block nav-link text-clay-800 py-2">
            About
          </Link>
          <Link to="/" className="block nav-link text-clay-800 py-2">
            Journal
          </Link>
        </div>
      </div>
    </header>
  );
}