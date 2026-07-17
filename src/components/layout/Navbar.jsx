import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-luxe",
          transparent
            ? "bg-transparent text-cream"
            : "bg-cream/95 backdrop-blur-md text-espresso border-b border-line shadow-[0_1px_0_rgba(36,27,18,0.04)]"
        )}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <div className="flex flex-1 items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 -ml-2 transition-colors hover:text-bronze"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <Link
            to="/"
            className="font-serif text-xl md:text-2xl font-medium tracking-[0.3em] uppercase transition-colors hover:text-bronze"
            aria-label="Velmora home"
          >
            Velmora
          </Link>

          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "relative text-[11px] font-medium uppercase tracking-luxe transition-colors duration-300 hover:text-bronze py-2",
                    "after:absolute after:left-0 after:bottom-0 after:h-px after:bg-bronze after:transition-all after:duration-300",
                    isActive ? "text-bronze after:w-full" : "after:w-0 hover:after:w-full"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
            <button
              type="button"
              aria-label="Search"
              onClick={onOpenSearch}
              className="p-2 transition-colors hover:text-bronze"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Wishlist"
              className="hidden md:inline-flex p-2 transition-colors hover:text-bronze"
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Open bag, ${count} items`}
              onClick={openCart}
              className="relative p-2 transition-colors hover:text-bronze"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-bronze px-1 text-[9px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-[78%] max-w-xs bg-cream transition-transform duration-500 ease-luxe md:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <span className="font-serif text-lg uppercase tracking-[0.3em] text-espresso">Velmora</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2 text-espresso hover:text-bronze transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile">
          {LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
              className={({ isActive }) =>
                cn(
                  "font-serif text-3xl font-light py-3 border-b border-line/60 transition-all duration-500",
                  mobileOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  isActive ? "text-bronze" : "text-espresso hover:text-bronze"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <p className="mt-auto px-6 pb-8 text-[11px] uppercase tracking-luxe text-cocoa">
          Free worldwide shipping · 30-day returns
        </p>
      </aside>
    </>
  );
}
