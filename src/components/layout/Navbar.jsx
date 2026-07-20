import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Determine if we are on a page where the hero overlay should apply.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 backdrop-blur-md text-espresso border-b border-sand"
      )}
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 -ml-2"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-[1.7rem] tracking-[0.22em] font-light",
              "absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[0.72rem] uppercase tracking-[0.22em] font-medium transition-opacity duration-300",
                    "hover:opacity-60",
                    isActive ? "opacity-100" : "opacity-80"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="p-1.5 hover:opacity-60 transition-opacity"
            >
              <Search className="w-5 h-5" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Open cart with ${count} items`}
              onClick={openCart}
              className="relative p-1.5 hover:opacity-60 transition-opacity"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
              {count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full",
                    "text-[10px] font-medium flex items-center justify-center",
                    transparent
                      ? "bg-ivory text-espresso"
                      : "bg-espresso text-ivory"
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[82%] max-w-sm bg-ivory text-espresso",
            "transform transition-transform duration-400",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-sand">
            <span className="font-serif text-xl tracking-[0.22em]">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-5 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-2xl font-serif tracking-tight"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
