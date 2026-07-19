import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND, NAV_LINKS } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  // Pages that should start with a transparent navbar over a hero
  const isHome = location.pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search, location.hash]);

  const transparent = isHome && !scrolled;
  const navTextClass = transparent ? "text-ivory" : "text-espresso";
  const navHoverClass = transparent
    ? "hover:text-gold-soft"
    : "hover:text-gold-deep";
  const navBg = transparent
    ? "bg-transparent"
    : "bg-ivory/95 backdrop-blur-md border-b border-line";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${navBg}`}
    >
      <div className="mx-auto max-w-7.5xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className={`lg:hidden -ml-2 inline-flex h-10 w-10 items-center justify-center transition-colors ${navTextClass} ${navHoverClass}`}
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl sm:text-[28px] tracking-wider-2 transition-colors ${navTextClass}`}
            aria-label={BRAND.full}
          >
            {BRAND.name.toUpperCase()}
          </Link>

          {/* Center links */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-sans text-[12px] tracking-wider-2 uppercase font-medium transition-colors duration-300 ${navTextClass} ${navHoverClass} ${
                    isActive && l.to === "/shop" ? "text-gold" : ""
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className={`flex items-center gap-2 sm:gap-3 ${navTextClass}`}>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center transition-colors ${navHoverClass}`}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className={`relative inline-flex h-10 w-10 items-center justify-center transition-colors ${navHoverClass}`}
              aria-label={`Open cart (${count} items)`}
              onClick={openCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className={`absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-medium ${
                    transparent
                      ? "bg-ivory text-espresso"
                      : "bg-espresso text-ivory"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${transparent ? "bg-espresso/95" : "bg-ivory border-t border-line"}`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-sans text-sm tracking-wider-2 uppercase font-medium py-2 ${
                transparent ? "text-ivory" : "text-espresso"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
