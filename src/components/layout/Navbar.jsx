import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/store/cart";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

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

  const navLinks = [
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/shop" },
    { label: "About", to: "/#about" },
    { label: "Journal", to: "/#journal" },
  ];

  const bgClass = scrolled || !isHome
    ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand/50"
    : "bg-transparent";

  const textClass = scrolled || !isHome ? "text-charcoal" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${textClass} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Left spacer (desktop) */}
            <div className="hidden lg:block w-[180px]" />

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl sm:text-3xl font-medium tracking-ultra-wide ${textClass} transition-colors absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs tracking-[0.2em] uppercase font-sans font-medium ${textClass} opacity-80 hover:opacity-100 transition-opacity relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-current after:transition-all after:duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                className={`p-2 ${textClass} opacity-80 hover:opacity-100 transition-opacity`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 ${textClass} opacity-80 hover:opacity-100 transition-opacity relative`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-16 left-0 right-0 bg-cream border-b border-sand p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm tracking-[0.15em] uppercase font-sans font-medium text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
