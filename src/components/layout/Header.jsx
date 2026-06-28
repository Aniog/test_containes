import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Header({ transparentOnTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open, itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-colors duration-500 ease-out",
        solid
          ? "bg-ivory/95 backdrop-blur border-b border-hairline text-onyx"
          : "bg-transparent text-ivory",
      )}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Left: mobile menu + logo */}
        <div className="flex items-center gap-3 md:gap-0 flex-1 md:flex-none">
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden -ml-2 p-2"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>
          <Link
            to="/"
            className="font-serif text-2xl md:text-[28px] tracking-[0.32em] font-light"
            aria-label="Velmora — Home"
          >
            VELMORA
          </Link>
        </div>

        {/* Center: nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "font-sans text-[11px] uppercase tracking-[0.28em] transition-colors duration-300",
                  isActive
                    ? solid
                      ? "text-gold"
                      : "text-champagne"
                    : solid
                      ? "text-onyx hover:text-gold"
                      : "text-ivory hover:text-champagne",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-3 md:gap-5 flex-1 md:flex-none justify-end">
          <button
            type="button"
            aria-label="Search"
            className="p-2 -mr-2 md:mr-0 hover:opacity-70 transition-opacity"
          >
            <Search size={18} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            aria-label={`Cart (${itemCount} items)`}
            onClick={open}
            className="relative p-2 -mr-2 md:mr-0 hover:opacity-70 transition-opacity"
          >
            <ShoppingBag size={18} strokeWidth={1.25} />
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full px-1 text-[10px] font-medium flex items-center justify-center",
                  solid ? "bg-gold text-onyx" : "bg-ivory text-onyx",
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-hairline text-onyx">
          <div className="max-w-[1280px] mx-auto px-5 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-xs uppercase tracking-[0.28em]",
                    isActive ? "text-gold" : "text-onyx",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
