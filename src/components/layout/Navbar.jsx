import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-text-primary no-underline">
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 no-underline ${
                scrolled ? "text-text-body hover:text-accent-gold" : "text-white/90 hover:text-white"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 no-underline ${
                scrolled ? "text-text-body hover:text-accent-gold" : "text-white/90 hover:text-white"
              }`}
            >
              Collections
            </Link>
            <Link
              to="/"
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 no-underline ${
                scrolled ? "text-text-body hover:text-accent-gold" : "text-white/90 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/"
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 no-underline ${
                scrolled ? "text-text-body hover:text-accent-gold" : "text-white/90 hover:text-white"
              }`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              className={`transition-colors duration-300 ${
                scrolled ? "text-text-body hover:text-accent-gold" : "text-white/90 hover:text-white"
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative transition-colors duration-300 ${
                scrolled ? "text-text-body hover:text-accent-gold" : "text-white/90 hover:text-white"
              }`}
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border-light">
          <div className="px-6 py-6 flex flex-col gap-6">
            <Link to="/shop" className="text-sm uppercase tracking-[0.15em] text-text-body no-underline" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" className="text-sm uppercase tracking-[0.15em] text-text-body no-underline" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/" className="text-sm uppercase tracking-[0.15em] text-text-body no-underline" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/" className="text-sm uppercase tracking-[0.15em] text-text-body no-underline" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
}