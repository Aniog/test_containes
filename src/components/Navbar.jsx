import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
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
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/shop" },
    { label: "About", href: "/#story" },
    { label: "Journal", href: "/" },
  ];

  const bgClass =
    !isHome || scrolled
      ? "bg-ivory/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";

  const textClass =
    !isHome || scrolled ? "text-espresso" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 -ml-2 ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl lg:text-2xl tracking-widest font-medium ${textClass}`}
            >
              VELMORA
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs font-medium uppercase tracking-widest transition-opacity duration-300 hover:opacity-60 ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className={`flex items-center gap-4 ${textClass}`}>
              <button aria-label="Search" className="p-1 hover:opacity-60 transition-opacity">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                aria-label="Cart"
                className="p-1 hover:opacity-60 transition-opacity relative"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-espresso text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-ivory shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-8 text-espresso"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-serif text-2xl text-espresso hover:text-bronze transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
