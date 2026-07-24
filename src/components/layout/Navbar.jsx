import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { NAV_LINKS } from "@/data/site";

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { summary, openCart } = useCart();
  const location = useLocation();

  // Determine if this page has a transparent hero (for transparent -> solid on scroll)
  const transparentHero =
    location.pathname === "/" || location.pathname === "/about";

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
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  const isTransparent = transparentHero && !scrolled && !mobileOpen;
  const linkBase = cn(
    "font-sans uppercase tracking-widest-2 text-[11px] font-medium transition-colors duration-300",
    isTransparent ? "text-cream-100" : "text-onyx-800",
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent"
          : "bg-cream-100/95 backdrop-blur-md border-b border-onyx-800/10",
      )}
    >
      <div className="container-wide">
        <div className="h-16 sm:h-20 grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left: Logo */}
          <Link
            to="/"
            aria-label="Velmora — home"
            className={cn(
              "font-display text-[22px] sm:text-[26px] tracking-widest-2 leading-none transition-colors duration-300",
              isTransparent ? "text-cream-100" : "text-onyx-800",
            )}
          >
            VELMORA
          </Link>

          {/* Center: nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    linkBase,
                    "relative py-1.5",
                    isActive && (isTransparent ? "text-cream-100" : "text-gold-500"),
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-3">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className={cn(
                "p-2.5 transition-colors",
                isTransparent ? "text-cream-100 hover:text-gold-300" : "text-onyx-800 hover:text-gold-500",
              )}
            >
              <Search size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${summary.count} items`}
              className={cn(
                "relative p-2.5 transition-colors",
                isTransparent ? "text-cream-100 hover:text-gold-300" : "text-onyx-800 hover:text-gold-500",
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.4} />
              {summary.count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center tabular-nums",
                    isTransparent
                      ? "bg-cream-100 text-onyx-800"
                      : "bg-onyx-800 text-cream-100",
                  )}
                  aria-hidden="true"
                >
                  {summary.count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn(
                "md:hidden p-2.5 transition-colors",
                isTransparent ? "text-cream-100" : "text-onyx-800",
              )}
            >
              <Menu size={20} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-all duration-500",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-onyx-900/60 transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[86%] max-w-sm bg-cream-100 shadow-drawer flex flex-col transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-onyx-800/10">
            <span className="font-display text-[22px] tracking-widest-2 text-onyx-800">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-onyx-800"
            >
              <X size={20} strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-display text-[28px] text-onyx-800",
                    isActive && "italic text-gold-500",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto p-6 border-t border-onyx-800/10">
            <p className="eyebrow mb-3">Customer care</p>
            <a href="mailto:hello@velmora.com" className="block text-[14px] text-onyx-800 mb-2">
              hello@velmora.com
            </a>
            <p className="text-[12px] text-mocha-500">Mon — Fri · 9am — 6pm CET</p>
          </div>
        </div>
      </div>
    </header>
  );
}
