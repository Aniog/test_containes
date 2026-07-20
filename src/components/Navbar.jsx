import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Shop", path: "/shop" },
  { label: "Collections", path: "/collections" },
  { label: "About", path: "/about" },
  { label: "Journal", path: "/journal" },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass =
    scrolled || !isHome
      ? "bg-white/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";

  const textClass =
    scrolled || !isHome ? "text-velmora-ebony" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${textClass}`} />
              ) : (
                <Menu className={`w-5 h-5 ${textClass}`} />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-wider hover:opacity-80 transition-opacity ${textClass}`}
            >
              VELMORA
            </Link>

            {/* Center nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide uppercase font-medium hover:opacity-70 transition-opacity ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 hover:opacity-70 transition-opacity ${textClass}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative hover:opacity-70 transition-opacity ${textClass}`}
                onClick={onCartOpen}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-velmora-gold text-velmora-ebony text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm border-t border-velmora-sand/20 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm tracking-wide uppercase text-velmora-ebony font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer for fixed nav */}
      {!isHome && <div className="h-16 md:h-20" />}
    </>
  );
}