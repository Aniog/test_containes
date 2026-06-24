import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=Earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalQty, open: openCart } = useCart();
  const location = useLocation();

  // Pages where the hero is full-bleed and we want a transparent nav at the top
  const heroPages = ["/"];
  const overHero = heroPages.includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !overHero || mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        solid
          ? "bg-bone/95 backdrop-blur border-b border-hairline text-ink"
          : "bg-transparent text-bone"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu */}
        <button
          aria-label="Open menu"
          className="md:hidden -ml-2 p-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Left links (desktop) */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {NAV_LINKS.slice(0, 2).map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "link-underline text-[11px] tracking-[0.25em] uppercase font-medium",
                  isActive && "text-gold"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className="font-serif text-2xl md:text-3xl tracking-[0.35em] font-light select-none"
        >
          VELMORA
        </Link>

        {/* Right links + icons */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {NAV_LINKS.slice(2).map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "link-underline text-[11px] tracking-[0.25em] uppercase font-medium",
                  isActive && "text-gold"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button aria-label="Search" className="p-1">
            <Search size={18} />
          </button>
          <button
            aria-label={`Open cart, ${totalQty} items`}
            onClick={openCart}
            className="relative p-1"
          >
            <ShoppingBag size={18} />
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-bone text-[10px] font-medium flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>
        </div>

        {/* Mobile right icons */}
        <div className="md:hidden flex items-center gap-3">
          <button aria-label="Search" className="p-1">
            <Search size={18} />
          </button>
          <button
            aria-label={`Open cart, ${totalQty} items`}
            onClick={openCart}
            className="relative p-1"
          >
            <ShoppingBag size={18} />
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-bone text-[10px] font-medium flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-bone text-ink">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm tracking-[0.25em] uppercase"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
