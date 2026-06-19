import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg =
    !isHome || scrolled
      ? "bg-velmora-cream/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";
  const textColor = !isHome || scrolled ? "text-velmora-ink" : "text-white";

  const links = [
    { label: "Shop", to: "/collection" },
    { label: "Collections", to: "/collection" },
    { label: "About", to: "/#story" },
    { label: "Journal", to: "/#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Mobile menu button */}
          <button
            className={`sm:hidden p-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden sm:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors hover:opacity-70 ${textColor}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl sm:text-2xl tracking-[0.15em] font-semibold transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className={`flex items-center gap-4 sm:gap-6 ${textColor}`}>
            <button aria-label="Search" className="hover:opacity-70 transition-opacity">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:opacity-70 transition-opacity"
              onClick={() => toggleDrawer(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] font-semibold text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-velmora-cream border-t border-velmora-stone/30">
          <div className="px-4 py-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="block text-sm font-medium tracking-[0.15em] uppercase text-velmora-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
