import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = query.trim()
    ? PRODUCTS.filter((p) =>
        `${p.name} ${p.tagline} ${p.category}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
      )
    : PRODUCTS;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-x-0 top-0 border-b border-sand bg-cream px-5 pb-8 pt-6 shadow-[0_24px_60px_-30px_rgba(33,27,20,0.4)] transition-transform duration-500 md:px-8",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Search Velmora
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="p-2 text-espresso transition-colors hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3 border-b border-ink/70 pb-3">
            <Search className="h-5 w-5 text-taupe" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              autoFocus={open}
              className="w-full bg-transparent font-serif text-2xl text-ink outline-none placeholder:text-taupe/70 md:text-3xl"
            />
          </div>
          <ul className="mt-6 divide-y divide-sand">
            {results.length === 0 && (
              <li className="py-6 text-sm text-taupe">
                No pieces found for “{query}”. Try “huggies” or “crystal”.
              </li>
            )}
            {results.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/product/${p.id}`}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4"
                >
                  <div>
                    <p className="font-serif text-lg uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-gold">
                      {p.name}
                    </p>
                    <p className="text-xs text-taupe">{p.tagline}</p>
                  </div>
                  <span className="text-sm text-espresso">
                    {formatPrice(p.price)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          solid
            ? "border-b border-sand bg-cream/95 text-ink shadow-[0_10px_30px_-20px_rgba(33,27,20,0.35)] backdrop-blur"
            : "border-b border-transparent bg-transparent text-cream",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <div className="flex flex-1 items-center md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="-ml-2 p-2"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Link
            to="/"
            className="font-serif text-2xl font-semibold tracking-[0.28em] md:flex-1 md:text-left"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] uppercase tracking-[0.25em] transition-colors",
                    solid
                      ? "text-espresso hover:text-gold"
                      : "text-cream/85 hover:text-cream",
                    isActive && "text-gold",
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
              onClick={() => setSearchOpen(true)}
              className={cn(
                "p-2 transition-colors",
                solid ? "hover:text-gold" : "hover:text-cream/70",
              )}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${count} items`}
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors",
                solid ? "hover:text-gold" : "hover:text-cream/70",
              )}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[75] md:hidden",
          mobileOpen ? "" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-cream px-7 py-6 transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl font-semibold tracking-[0.28em] text-ink">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="-mr-2 p-2 text-espresso"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-7" aria-label="Mobile">
            {[{ to: "/", label: "Home" }, ...NAV_LINKS].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl text-ink transition-colors hover:text-gold",
                    isActive && "italic text-gold",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-auto text-xs leading-relaxed text-taupe">
            Demi-fine jewelry, crafted to be treasured. Free worldwide shipping
            on every order.
          </p>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
