import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/shop" },
  { label: "About", href: "/#about" },
  { label: "Journal", href: "/#journal" },
];

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
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border-warm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl tracking-[0.2em] font-medium transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-dark"
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-inter text-xs uppercase tracking-widest transition-colors duration-200 hover:opacity-60 ${
                    isTransparent ? "text-white/90" : "text-dark"
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
                className={`hidden md:flex p-1 hover:opacity-60 transition-opacity ${
                  isTransparent ? "text-white" : "text-dark"
                }`}
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                aria-label="Open cart"
                onClick={() => setIsOpen(true)}
                className={`relative p-1 hover:opacity-60 transition-opacity ${
                  isTransparent ? "text-white" : "text-dark"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[9px] font-inter font-medium rounded-full flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden p-1 hover:opacity-60 transition-opacity ${
                  isTransparent ? "text-white" : "text-dark"
                }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-border-warm ${
            mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-inter text-xs uppercase tracking-widest text-dark hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border-warm">
              <Search className="w-4 h-4 text-stone-warm" />
              <span className="font-inter text-xs uppercase tracking-widest text-stone-warm">
                Search
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
