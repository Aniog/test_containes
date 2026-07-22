import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Header() {
  const { summary, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Pages that should have a transparent header over a hero.
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Transparent only on home AND when at top.
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-editorial",
        transparent
          ? "bg-transparent text-bone"
          : "bg-bone/95 backdrop-blur-md text-ink border-b border-hairline"
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 -ml-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif tracking-[0.32em] text-2xl md:text-3xl font-medium leading-none",
            "transition-colors"
          )}
          aria-label="Velmora — Home"
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "relative text-[12px] uppercase font-medium tracking-[0.22em] transition-colors",
                  "after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300",
                  "hover:after:w-full",
                  isActive && "after:w-full"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-2 hover:text-champagne transition-colors"
          >
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${summary.count} item${summary.count === 1 ? "" : "s"}`}
            onClick={openCart}
            className="relative p-2 hover:text-champagne transition-colors"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {summary.count > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full text-[10px] font-medium",
                  transparent ? "bg-bone text-ink" : "bg-ink text-bone"
                )}
              >
                {summary.count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-bone text-ink border-t border-hairline transition-[max-height] duration-300 ease-editorial",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container-x py-6 flex flex-col gap-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[13px] uppercase font-medium tracking-[0.22em] py-2",
                  isActive ? "text-champagne-deep" : "text-ink"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
