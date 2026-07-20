import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Journal", to: "/journal" },
  ];

  const solidBg = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidBg
            ? "bg-ivory shadow-sm border-b border-ivory-dark"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest2 font-light transition-colors duration-300 ${
              solidBg ? "text-obsidian" : "text-ivory"
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 hover:text-champagne ${
                  solidBg ? "text-obsidian" : "text-ivory"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`transition-colors duration-300 hover:text-champagne ${
                solidBg ? "text-obsidian" : "text-ivory"
              }`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-300 hover:text-champagne ${
                solidBg ? "text-obsidian" : "text-ivory"
              }`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-champagne text-obsidian text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              className={`md:hidden transition-colors duration-300 hover:text-champagne ${
                solidBg ? "text-obsidian" : "text-ivory"
              }`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ivory pt-16 flex flex-col">
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-3xl text-obsidian tracking-widest hover:text-champagne transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pb-12 text-center">
            <p className="font-sans text-xs text-stone tracking-widest uppercase">
              Free Worldwide Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      )}
    </>
  );
}
