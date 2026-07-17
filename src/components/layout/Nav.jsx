import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections", category: "earrings" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { summary, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  // Hero variant: transparent over hero at top, solid once scrolled
  const transparent = isHome && !scrolled;
  const baseText = transparent ? "text-ivory" : "text-ink";
  const subText = transparent ? "text-ivory/80" : "text-ink-soft";
  const navBg = transparent ? "bg-transparent" : "bg-cream/95 backdrop-blur";
  const borderColor = transparent ? "border-transparent" : "border-line";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        navBg,
        "border-b",
        borderColor
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-editorial items-center justify-between px-5 md:px-10">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden -ml-2 inline-flex h-10 w-10 items-center justify-center",
            baseText
          )}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>

        {/* Left logo (desktop center) */}
        <Link
          to="/"
          aria-label="Velmora — home"
          className={cn(
            "font-display text-[22px] md:text-[26px] leading-none tracking-[0.18em] uppercase",
            baseText
          )}
        >
          Velmora
        </Link>

        {/* Center links — desktop */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "cta-caps transition-colors duration-300",
                  isActive ? "text-gold" : subText,
                  "hover:text-gold"
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
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center transition-colors",
              baseText,
              "hover:text-gold"
            )}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart (${summary.count} items)`}
            onClick={openCart}
            className={cn(
              "relative inline-flex h-10 w-10 items-center justify-center transition-colors",
              baseText,
              "hover:text-gold"
            )}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {summary.count > 0 && (
              <span
                className={cn(
                  "absolute -bottom-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-medium",
                  transparent ? "bg-ivory text-ink" : "bg-ink text-ivory"
                )}
              >
                {summary.count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          transparent && !scrolled ? "bg-ink-deep text-ivory" : "bg-cream text-ink",
          "border-t",
          transparent && !scrolled ? "border-ivory/10" : "border-line"
        )}
      >
        <nav className="flex flex-col px-5 py-5">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "py-3 font-display text-2xl tracking-wide",
                  isActive ? "text-gold" : "inherit"
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
