import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useCart } from "@/context/CartContext.jsx";
import Container from "@/components/ui/Container.jsx";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

const Navbar = () => {
  const { summary, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Pages that have a dark hero under the nav — use the "over-hero" style until scrolled
  const isHome = location.pathname === "/";
  const overHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        overHero
          ? "bg-transparent text-cream"
          : "bg-cream/95 backdrop-blur-sm text-ink border-b border-ink/5"
      )}
    >
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <Link
              to="/"
              className="font-serif text-2xl sm:text-[1.7rem] tracking-widest2 leading-none"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>
          </div>

          {/* Center: nav links */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "link-underline font-sans text-[0.78rem] uppercase tracking-wider2",
                    isActive && "text-champagne"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: search + cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="p-2 hidden sm:inline-flex"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2"
              aria-label={`Open cart, ${summary.itemCount} items`}
            >
              <ShoppingBag size={20} />
              {summary.itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center",
                    overHero
                      ? "bg-cream text-ink"
                      : "bg-ink text-cream"
                  )}
                >
                  {summary.itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-[80%] max-w-sm bg-cream text-ink shadow-soft transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-ink/10">
            <span className="font-serif text-2xl tracking-widest2">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="px-5 py-8 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-2xl tracking-wide",
                    isActive ? "text-bronze" : "text-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="hairline my-4" />
            <button
              type="button"
              className="font-sans text-[0.78rem] uppercase tracking-wider2 text-left flex items-center gap-3"
            >
              <Search size={16} /> Search
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
