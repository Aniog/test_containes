import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/collections" },
  { name: "About", path: "/about" },
  { name: "Journal", path: "/journal" },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
        solid
          ? "bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Mobile menu button */}
        <button
          className={`md:hidden transition-colors ${solid ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl font-medium tracking-[0.12em] uppercase transition-colors ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          Velmora
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-primary ${
                solid ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            className={`transition-colors hover:text-primary ${
              solid ? "text-foreground/70" : "text-white/80"
            }`}
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={onCartOpen}
            className={`relative transition-colors hover:text-primary ${
              solid ? "text-foreground/70" : "text-white/80"
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav
          className={`border-t px-6 py-4 ${
            solid ? "border-border bg-background" : "border-white/10 bg-foreground/95"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 font-sans text-sm uppercase tracking-[0.12em] transition-colors hover:text-primary ${
                solid ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}