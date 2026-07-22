import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function Wordmark({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="Velmora — Home"
      className={cn(
        "font-serif text-2xl md:text-[26px] leading-none tracking-[0.32em] uppercase select-none",
        light ? "text-cream" : "text-ink"
      )}
    >
      Velmora
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { totals, openCart, mobileMenuOpen, setMobileMenuOpen } = useCart();
  const location = useLocation();

  // Use solid header on inner pages (no hero), or after scroll on homepage
  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;
  const overDark = isHome && !scrolled; // hero is dark, render nav on dark

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out",
        solid
          ? "bg-cream/95 backdrop-blur-sm border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
          className={cn(
            "md:hidden p-2 -ml-2 transition-colors",
            overDark ? "text-cream" : "text-ink"
          )}
        >
          <Menu strokeWidth={1.25} className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none md:w-48 flex md:justify-start">
          <Wordmark light={overDark} />
        </div>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "link-underline transition-colors",
                  overDark ? "text-cream" : "text-ink",
                  isActive && "after:w-full"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-2 md:w-48 md:justify-end">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "p-2 transition-colors",
              overDark ? "text-cream hover:text-gold" : "text-ink hover:text-gold-deep"
            )}
          >
            <Search strokeWidth={1.25} className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label={`Open cart (${totals.count} items)`}
            onClick={openCart}
            className={cn(
              "relative p-2 transition-colors",
              overDark ? "text-cream hover:text-gold" : "text-ink hover:text-gold-deep"
            )}
          >
            <ShoppingBag strokeWidth={1.25} className="w-5 h-5" />
            {totals.count > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-sans font-medium flex items-center justify-center",
                  overDark
                    ? "bg-cream text-ink"
                    : "bg-ink text-cream"
                )}
              >
                {totals.count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
