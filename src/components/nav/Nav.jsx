import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/#about" },
    { label: "Journal", to: "/#journal" },
  ];

  const solidBg = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          solidBg
            ? "bg-velvet shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-light tracking-widest2 uppercase transition-colors duration-300 ${
              solidBg ? "text-parchment" : "text-ivory"
            }`}
          >
            Velmora
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                  solidBg ? "text-champagne" : "text-ivory/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`transition-colors duration-300 hover:text-gold ${
                solidBg ? "text-champagne" : "text-ivory/90"
              }`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-300 hover:text-gold ${
                solidBg ? "text-champagne" : "text-ivory/90"
              }`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-velvet text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden transition-colors duration-300 hover:text-gold ${
                solidBg ? "text-champagne" : "text-ivory/90"
              }`}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-velvet border-t border-bark/40">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-xs tracking-widest uppercase text-champagne hover:text-gold px-6 py-3 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
