import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/#collections", label: "Collections" },
  { to: "/#story", label: "About" },
  { to: "/#journal", label: "Journal" },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out",
        transparent
          ? "bg-transparent text-cream"
          : "border-b border-line bg-cream/95 text-ink shadow-[0_10px_30px_-20px_rgba(33,26,18,0.4)] backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <div className="flex flex-1 items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 -ml-2 transition-colors hover:text-gold"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        <Link
          to="/"
          className="font-serif text-xl font-medium uppercase tracking-[0.28em] md:text-2xl"
        >
          Velmora
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-9 lg:flex">
          {NAV_LINKS.map((link) =>
            link.to.startsWith("/#") ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-[11px] font-medium uppercase tracking-widest2 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] font-medium uppercase tracking-widest2 transition-colors hover:text-gold",
                    isActive && "text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="p-2 transition-colors hover:text-gold"
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="hidden p-2 transition-colors hover:text-gold md:block"
          >
            <Heart size={19} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative p-2 transition-colors hover:text-gold"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-b border-line bg-cream transition-all duration-300 ease-out",
          searchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4 md:px-8">
          <Search size={18} strokeWidth={1.5} className="shrink-0 text-taupe" />
          <input
            type="search"
            placeholder="Search earrings, huggies, necklaces…"
            className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-taupe focus:outline-none"
            autoFocus={searchOpen}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 top-full border-b border-line bg-cream text-ink shadow-xl transition-all duration-300 ease-out lg:hidden",
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <div className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="border-b border-line/60 py-4 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors last:border-0 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
