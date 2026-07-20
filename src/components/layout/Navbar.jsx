import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleDrawer, count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? "bg-white/90 backdrop-blur-md border-b border-border"
    : "bg-transparent";

  const linkClass = (path) =>
    `text-sm tracking-wide transition-colors duration-200 ${
      location.pathname === path ? "text-ink" : "text-ink-secondary hover:text-ink"
    }`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="section-container flex h-16 items-center justify-between">
        <button
          type="button"
          className="md:hidden p-2 -ml-2 text-ink"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-xl font-semibold tracking-[0.18em] text-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass("/shop")}>Shop</Link>
          <Link to="/shop" className={linkClass("/shop")}>Collections</Link>
          <Link to="/" className={linkClass("/")}>About</Link>
          <Link to="/" className={linkClass("/")}>Journal</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" className="p-2 text-ink-secondary hover:text-ink transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative p-2 text-ink-secondary hover:text-ink transition-colors"
            onClick={toggleDrawer}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <div className="section-container flex flex-col gap-4 py-6">
            <Link to="/shop" className="text-sm font-medium text-ink">Shop</Link>
            <Link to="/shop" className="text-sm font-medium text-ink">Collections</Link>
            <Link to="/" className="text-sm font-medium text-ink">About</Link>
            <Link to="/" className="text-sm font-medium text-ink">Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
