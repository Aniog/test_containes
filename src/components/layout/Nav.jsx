import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/#story" },
  { label: "Journal", to: "/#journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-ivory/95 backdrop-blur-sm shadow-sm";

  const textColor = isHome && !scrolled ? "text-ivory" : "text-obsidian";
  const logoColor = isHome && !scrolled ? "text-gold-light" : "text-gold-dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-light tracking-widest2 transition-colors duration-400 ${logoColor}`}
          >
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:text-gold ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`transition-colors duration-300 hover:text-gold ${textColor} bg-transparent border-0 p-1`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-300 hover:text-gold ${textColor} bg-transparent border-0 p-1`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-obsidian text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className={`md:hidden transition-colors duration-300 hover:text-gold ${textColor} bg-transparent border-0 p-1`}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-obsidian flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-serif text-xl text-gold-light tracking-widest2">VELMORA</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-ivory bg-transparent border-0 p-1"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-ivory font-light tracking-wide hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pb-10 text-center">
            <p className="font-sans text-xs text-taupe uppercase tracking-widest">
              Free Worldwide Shipping
            </p>
          </div>
        </div>
      )}
    </>
  );
}
