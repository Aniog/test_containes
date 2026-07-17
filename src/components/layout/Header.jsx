import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Journal", to: "/journal" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-velmora flex items-center justify-between h-16 sm:h-20">
        {/* Left: Logo */}
        <Link
          to="/"
          className={`font-serif text-xl sm:text-2xl tracking-widest uppercase ${
            scrolled ? "text-velmora-charcoal" : "text-white"
          } transition-colors duration-500`}
        >
          Velmora
        </Link>

        {/* Center: Nav Links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide uppercase ${
                scrolled
                  ? "text-velmora-charcoal hover:text-accent"
                  : "text-white/90 hover:text-white"
              } transition-colors duration-300`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <button
            className={`hidden sm:block ${
              scrolled ? "text-velmora-charcoal" : "text-white"
            } transition-colors duration-500`}
          >
            <Search size={20} />
          </button>

          <button
            onClick={toggleCart}
            className={`relative ${
              scrolled ? "text-velmora-charcoal" : "text-white"
            } transition-colors duration-500`}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${
              scrolled ? "text-velmora-charcoal" : "text-white"
            } transition-colors duration-500`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border animate-slide-down">
          <nav className="container-velmora flex flex-col py-6 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm tracking-wide uppercase text-velmora-charcoal py-2"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
