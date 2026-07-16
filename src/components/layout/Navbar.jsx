import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/" },
  { label: "Journal", to: "/" },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-velmora-bg/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-velmora-text" />
            ) : (
              <Menu className="w-5 h-5 text-velmora-text" />
            )}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  "font-sans text-xs uppercase tracking-widest transition-colors",
                  scrolled
                    ? "text-velmora-text hover:text-velmora-gold"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors",
              scrolled ? "text-velmora-text" : "text-white"
            )}
          >
            VELMORA
          </Link>

          {/* Spacer for centering */}
          <div className="hidden md:block flex-1" />

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={cn(
                "p-1.5 transition-colors",
                scrolled
                  ? "text-velmora-text hover:text-velmora-gold"
                  : "text-white/90 hover:text-white"
              )}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className={cn(
                "relative p-1.5 transition-colors",
                scrolled
                  ? "text-velmora-text hover:text-velmora-gold"
                  : "text-white/90 hover:text-white"
              )}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 bg-velmora-bg border-t border-velmora-border space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block font-sans text-sm uppercase tracking-widest text-velmora-text hover:text-velmora-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}